import { objectType } from "@nexus/schema";
export const Query = objectType({
	name: "Query",
	definition(t) {
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
	},
});
