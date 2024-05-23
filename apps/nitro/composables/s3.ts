import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { createWriteStream } from "fs";
import { unWrapPath } from '~~/ utils/unwrap';

const runtime = useRuntimeConfig()

const s3Client = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: runtime.viteS3Accessid,
    secretAccessKey: runtime.viteS3Secretkey,
  }
});

export async function AWS_S3_COMPOSABLES() {

  const oneMB = 1024 * 1024;

  const getObjectRange = ({ bucket, key, start, end }) => {
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: key,
      Range: `bytes=${start}-${end}`,
    });

    return s3Client.send(command);
  };


  const getRangeAndLength = (contentRange: string | undefined) => {
    const [range, length] = contentRange.split("/");
    const [start, end] = range.split("-");
    return {
      start: parseInt(start),
      end: parseInt(end),
      length: parseInt(length),
    };
  };

  const isComplete = ({ end, length }) => end === length - 1;

  const downloadInChunks = async ({ path }: {
    path: string

  }) => {

    const tempFilePath = unWrapPath(path).name;

    const bucket = runtime.viteS3BucketName;

    const writeStream = createWriteStream(`./temp/${tempFilePath}`)
      .on("error", (err) => console.error(err));

    let rangeAndLength = { start: -1, end: -1, length: -1 };

    while (!isComplete(rangeAndLength)) {
      const { end } = rangeAndLength;
      const nextRange = { start: end + 1, end: end + oneMB };

      console.log(`Downloading bytes ${nextRange.start} to ${nextRange.end}`);

      const { ContentRange, Body } = await getObjectRange({
        bucket,
        key: path,
        ...nextRange,
      });

      writeStream.write(await Body.transformToByteArray());
      rangeAndLength = getRangeAndLength(ContentRange);

    }

    return tempFilePath
  };

  return {
    downloadFile: downloadInChunks
  }

}

