import { z } from 'zod'
import { AWS_S3_COMPOSABLES } from '~~/composables/s3'
import fs from 'fs'

export default defineEventHandler(async event => {
  const body = await readValidatedBody(event, z.object({
    s3Path: z.string(),
  }).safeParse)

  if (!body.success) {
    throw createError({
      status: 400,
      message: "Invalid body",
    })
  }

  // const file = await (await AWS_S3_COMPOSABLES()).downloadFile({
  //   path: body.data.s3Path,
  // })

  // console.log(file)

  console.log(useRuntimeConfig(event))

  // the file is an apk save it to file system via fs module
  return
})

