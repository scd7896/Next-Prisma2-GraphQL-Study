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
