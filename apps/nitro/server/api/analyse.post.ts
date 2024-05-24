import { z } from 'zod'
import { AWS_S3_COMPOSABLES } from '~~/composables/s3'
import fs from 'fs'
import { runCore } from '~~/ utils/core'
import { unWrapPath } from '~~/ utils/unwrap'

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


  const app = unWrapPath(body.data.s3Path)

  const res = await runCore(app.name)

  return {
    status: 200,
    body:
      res
  }

})

