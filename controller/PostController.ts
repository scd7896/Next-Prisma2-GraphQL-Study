import { ObjectDefinitionBlock } from "@nexus/schema/dist/core";

const queries = (t: ObjectDefinitionBlock<"Query">) => {
	t.list.field("posts", {
		type: "Post",
		resolve: async (root, args, ctx) => {
			const posts = await ctx.prisma.post.findMany({
				where: {
					id: { gt: 1 },
				},
			});
			return posts;
		},
	});
};

const mutations = (t: ObjectDefinitionBlock<"Mutation">) => {};

export default {
	query: queries,
	mutation: mutations,
};
