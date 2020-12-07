import { PrismaClient } from "@prisma/client";

interface NexusContext {
	prisma: PrismaClient;
}
