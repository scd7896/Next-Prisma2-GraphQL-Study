import { intArg, nonNull, ObjectDefinitionBlock, stringArg } from "@nexus/schema/dist/core";
import { NexusContext } from "types";

const queries = (t: ObjectDefinitionBlock<"Query">) => {
	t.field("posts", {
		type: "JsendPostList",
		args: {
			offset: nonNull(intArg()),
			size: nonNull(intArg()),
		},
		resolve: async (_, { offset, size }, { prisma }: NexusContext) => {
			const posts = await prisma.post.findMany({
				skip: offset,
				take: size,
				include: {
					author: {
						select: {
							email: true,
							name: true,
							password: false,
							profile: true,
						},
					},
				},
			});
			return { status: "success", payload: posts };
		},
	});
};

const mutations = (t: ObjectDefinitionBlock<"Mutation">) => {
	t.field("removePosts", {
		type: "JsendPost",
		args: {
			id: nonNull(intArg()),
		},
		resolve: async (_, { id }, { prisma, user }: NexusContext) => {
			if (!user) {
				throw new Error("로그인이 되지 않았습니다.");
			}
			const target = await prisma.post.findUnique({ where: { id }, include: { author: true } });
			if (!target) throw new Error("해당 포스트는 없습니다");

			if (target.author.email !== user.email) throw new Error("삭제 권한이 없습니다.");

			return {
				status: "success",
				payload: await prisma.post.delete({
					where: {
						id,
					},
				}),
			};
		},
	});

	t.field("addPosts", {
		type: "JsendPost",
		args: {
			title: nonNull(stringArg()),
			description: stringArg(),
		},
		resolve: async (_, { title, description }, { prisma, user }: NexusContext) => {
			if (!user) {
				const error = new Error("작성할 수 없습니다.");
				throw error;
			}
			try {
				return {
					status: "success",
					payload: await prisma.post.create({
						data: {
							title,
							description,
							author: {
								connect: {
									email: user.email,
								},
							},
						},
					}),
				};
			} catch (err) {
				throw err;
			}
		},
	});
};

export default {
	query: queries,
	mutation: mutations,
};
