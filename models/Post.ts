import { objectType } from "@nexus/schema";
import { PrismaClient } from "@prisma/client";

export const Post = objectType({
	name: "Post",
	definition(t) {
		t.model.id();
		t.model.image();
		t.model.title();
		t.model.published();
		t.model.authorId();
		t.model.description();
		t.model.author({ type: "User" });
	},
});
