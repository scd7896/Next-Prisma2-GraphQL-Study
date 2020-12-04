import { objectType } from "@nexus/schema";

export const Profile = objectType({
	name: "Profile",
	definition(t) {
		t.model.id();
		t.model.bio();
		t.model.published();
		t.model.userId();
		t.model.User({ type: "User" });
	},
});
