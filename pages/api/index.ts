import { makeSchema, objectType, stringArg, asNexusMethod } from "@nexus/schema";
import { GraphQLDate } from "graphql-iso-date";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-micro";
import path from "path";

export const GQLDate = asNexusMethod(GraphQLDate, "date");

const prisma = new PrismaClient();
const Query = objectType({
	name: "Query",
	definition(t) {
		t.int("test");
		t.field("User", {
			type: "User",
			resolve: () => {
				return prisma.user.findUnique({
					where: {
						id: 1,
					},
				});
			},
		});
	},
});

const User = objectType({
	name: "User",
	definition(t) {
		t.int("id");
		t.string("name");
		t.string("email");
		t.string("password");
	},
});

export const schema = makeSchema({
	types: [Query, User, GQLDate],
	outputs: {
		typegen: path.join(process.cwd(), "pages", "api", "nexus-typegen.ts"),
		schema: path.join(process.cwd(), "pages", "api", "schema.graphql"),
	},
});

export const config = {
	api: {
		bodyParser: false,
	},
};

export default new ApolloServer({ schema }).createHandler({
	path: "/api",
});
