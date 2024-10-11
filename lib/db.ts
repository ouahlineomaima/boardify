import { PrismaClient } from "@prisma/client";


declare global{
    var prisma: PrismaClient | undefined;
}
// we do that the prevent hot realoding from reassigning prisma client to db when it hot realoads since the global is excluded from hot reload
export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = db;
