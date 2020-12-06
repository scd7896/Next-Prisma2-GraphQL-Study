import { objectType } from "@nexus/schema";
import PostController from "./PostController";
export const Query = objectType({
	name: "Query",
	definition(t) {
		PostController.query(t);
	},
});

export const Mutation = objectType({
	name: "Mutation",
	definition(t) {
		PostController.mutation(t);
	},
});
