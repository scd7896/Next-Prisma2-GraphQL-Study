import { User } from "./User";
import { Profile } from "./Profile";
import { Post, JsendPost, JsendPostList } from "./Post";

import { objectType } from "@nexus/schema";
import PostSchema from "./schema/Post";
export const Query = objectType({
	name: "Query",
	definition(t) {
		PostSchema.query(t);
	},
});

export const Mutation = objectType({
	name: "Mutation",
	definition(t) {
		PostSchema.mutation(t);
	},
});

export const types = [Query, Mutation, JsendPost, JsendPostList, User, Profile, Post];
