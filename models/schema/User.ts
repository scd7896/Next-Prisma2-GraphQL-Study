import jwt from "jsonwebtoken";
import { nonNull, ObjectDefinitionBlock, stringArg } from "@nexus/schema/dist/core";
import { NexusContext } from "types";
const createFailMessage = (message: string) => ({
	status: "fail",
	message,
});
const queries = (t: ObjectDefinitionBlock<"Query">) => {
	t.field("getMyData", {
		type: "UserLogin",
		resolve: (_, __, ctx) => {
			return { status: "success", token: ctx.token, payload: ctx.user };
		},
	});
};

const mutations = (t: ObjectDefinitionBlock<"Mutation">) => {
	t.field("signUp", {
		type: "UserLogin",
		args: {
			email: nonNull(stringArg()),
			password: nonNull(stringArg()),
			passwordCheck: nonNull(stringArg()),
			name: nonNull(stringArg()),
		},
		resolve: async (_, { email, password, passwordCheck, name }, { prisma }: NexusContext) => {
			if (password !== passwordCheck) return createFailMessage("비밀번호가 다릅니다");
			const user = await prisma.user.findMany({ where: { email } });
			if (user.length !== 0) return createFailMessage("이미 가입 되어있는 이메일 입니다.");

			const createUser = await prisma.user.create({
				data: {
					email,
					name,
					password,
				},
			});

			const token = jwt.sign({ id: createUser.id, email: createUser?.email, name: createUser?.name }, "test-secret", {
				expiresIn: "1h",
			});

			return {
				status: "success",
				token,
				payload: { email: createUser.email, id: createUser.id, name: createUser.name },
			};
		},
	});

	t.field("login", {
		type: "UserLogin",
		args: {
			email: nonNull(stringArg()),
			password: nonNull(stringArg()),
		},
		resolve: async (_, { email, password }, { prisma }: NexusContext) => {
			const user = await prisma.user.findUnique({
				where: {
					email,
				},
			});
			if (!user) return createFailMessage("해당 이메일로 가입된 유저가 없습니다.");

			if (user.password === password) {
				const token = jwt.sign({ id: user.id, email: user?.email, name: user?.name }, "test-secret", {
					expiresIn: "1h",
				});
				return {
					status: "success",
					token: token,
					payload: {
						id: user.id,
						email: user.email,
						name: user.name,
					},
				};
			} else return createFailMessage("비밀번호가 잘못 되었습니다");
		},
	});
};

export default {
	query: queries,
	mutation: mutations,
};
