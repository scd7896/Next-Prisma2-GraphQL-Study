import { list, objectType } from "@nexus/schema";

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

export const JsendPost = objectType({
	name: "JsendPost",
	definition(t) {
		t.string("status");
		t.string("message");
		t.field("payload", {
			type: "Post",
		});
	},
});

export const JsendPostList = objectType({
	name: "JsendPostList",
	definition(t) {
		t.string("status");
		t.string("message");
		t.field("payload", {
			type: list("Post"),
		});
	},
});
