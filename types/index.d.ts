import { PrismaClient } from "@prisma/client";

interface NexusContext {
	prisma: PrismaClient;
	user: {
		id: number;
		email: string;
		name: string;
		iat: number;
		exp: number;
	} | null;
}
