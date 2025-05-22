//import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "@/lib/generated/prisma";

const db = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

export default db;
