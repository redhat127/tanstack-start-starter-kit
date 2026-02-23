import { serverEnv } from '@/env/server'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: serverEnv.DATABASE_URL,
  },
})
