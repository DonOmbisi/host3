"use server";

import { neon } from "@neondatabase/serverless";

import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const sql = neon(
  "postgresql://jsm_ryde_owner:9BKdiDGkasz5@ep-super-water-a24fjuif-pooler.eu-central-1.aws.neon.tech/hostink?sslmode=require"
);

export const db = drizzle(sql, { schema });
