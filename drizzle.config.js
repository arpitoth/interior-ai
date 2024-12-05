import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://interior-ai_owner:A0W8OkKRMElB@ep-super-cherry-a2v1aqxf.eu-central-1.aws.neon.tech/interior-ai?sslmode=require',
  },
});
