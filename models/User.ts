import { objectType } from "@nexus/schema";

export const User = objectType({
	name: "User",
	definition(t) {
		t.model.id();
		t.model.email();
		t.model.name();
		t.model.password();
		t.model.posts({ pagination: false });
		t.model.profile({ type: "Profile" });
	},
});

export const UserLogin = objectType({
	name: "UserLogin",
	definition(t) {
		t.string("status");
		t.string("token");
		t.string("message");
		t.field("payload", {
			type: "User",
		});
	},
});
