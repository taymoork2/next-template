import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// Use .env.local
export const env = createEnv({
  isServer: typeof window === 'undefined',
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
  },
  client: {
    // NEXT_PUBLIC_APP_URL: z.string().min(1),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    // NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
});
