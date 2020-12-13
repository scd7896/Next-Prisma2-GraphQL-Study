import { User, UserLogin } from "./User";
import { Profile } from "./Profile";
import { Post, JsendPost, JsendPostList } from "./Post";

import { objectType } from "@nexus/schema";
import PostSchema from "./schema/Post";
import UserSchema from "./schema/User";
export const Query = objectType({
	name: "Query",
	definition(t) {
		PostSchema.query(t);
		UserSchema.query(t);
	},
});

export const Mutation = objectType({
	name: "Mutation",
	definition(t) {
		PostSchema.mutation(t);
		UserSchema.mutation(t);
	},
});

export const types = [Query, Mutation, UserLogin, JsendPost, JsendPostList, User, Profile, Post];
