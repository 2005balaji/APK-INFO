import { z } from 'zod'
import { AWS_S3_COMPOSABLES } from '~~/composables/s3'
import { runCore } from '~~/ utils/core'

export default defineEventHandler(async event => {
  console.log('Event came with body: ', await readBody(event) || 'No body')

  const body = await readValidatedBody(event, z.object({
    s3Path: z.string(),
  }).safeParse)

  if (!body.success) {
    console.error('Invalid body', body.error)
    throw createError({
      status: 400,
      message: "Invalid body",
    })
  }

  const file = await (await AWS_S3_COMPOSABLES()).downloadFile({
    path: body.data.s3Path,
  })

  // const file = `1716483916084-google.apk`

  console.log(file)

  const res = await runCore(file)

  return {
    status: 200,
    body:
      res
  }

})

