import { intArg, nonNull, ObjectDefinitionBlock, stringArg } from "@nexus/schema/dist/core";
import { NexusContext } from "types";

const queries = (t: ObjectDefinitionBlock<"Query">) => {
	t.field("posts", {
		type: "JsendPostList",
		args: {
			id: intArg({ nullable: false }),
		},
		resolve: async (root, { id }, { prisma }: NexusContext) => {
			const posts = await prisma.post.findMany({
				where: {
					id: { gt: id },
				},
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
			authorEmail: nonNull(stringArg()),
			id: nonNull(intArg()),
		},
		resolve: async (root, { authorEmail, id }, { prisma }: NexusContext) => {
			const target = await prisma.post.findUnique({ where: { id }, include: { author: true } });
			if (!target)
				return {
					status: "fail",
					message: "해당 포스트는 없습니다.",
				};

			if (target.author.email !== authorEmail)
				return {
					status: "fail",
					message: "삭제 권한이 없습니다.",
				};

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
			authorEmail: nonNull(stringArg()),
			title: nonNull(stringArg()),
			description: stringArg(),
		},
		resolve: async (root, { authorEmail, title, description }, { prisma }: NexusContext) => {
			return {
				status: "success",
				payload: await prisma.post.create({
					data: {
						title,
						description,
						author: {
							connect: {
								email: authorEmail,
							},
						},
					},
				}),
			};
		},
	});
};

export default {
	query: queries,
	mutation: mutations,
};
