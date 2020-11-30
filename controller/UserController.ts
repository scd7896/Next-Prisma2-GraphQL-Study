import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

export const findByEmail = async (id: number) => {
	try {
		const user = await prisma.user.findFirst({
			where: {
				id: id,
			},
		});
		return user;
	} catch (err) {
		throw err;
	} finally {
		prisma.$disconnect();
	}
};

export const userPost = async ({ email, name }: User) => {
	try {
		const user = await prisma.user.create({
			data: {
				email,
				name,
			},
		});

		return user;
	} catch (err) {
		throw err;
	} finally {
		prisma.$disconnect();
	}
};
