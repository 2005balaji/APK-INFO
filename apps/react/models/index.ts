import { z } from 'zod';

export const appData = z.object({
  application_Name: z.string(),
  permissions: z.string().nullish(),
  features: z.string().nullish(),
  languages: z.string().nullish(),
  minsdkVersion: z.string().nullish(),
  signatures: z.string().nullish(),
  supportedScreendensities: z.string().nullish(),
  targetSdkVersion: z.string().nullish(),
  versionCode: z.string().nullish(),
  supportScreensizes: z.string().nullish(),
  versionName: z.string().nullish(),
});

export type AppData = z.infer<typeof appData>;