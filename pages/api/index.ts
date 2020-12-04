import { makeSchema } from "@nexus/schema";
import { ApolloServer } from "apollo-server-micro";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import path from "path";
import { types } from "../../models";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const schema = makeSchema({
	types: types,
	plugins: [nexusSchemaPrisma({ experimentalCRUD: true })],
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

export default new ApolloServer({ schema, context: (ctx) => ({ ...ctx, prisma }) }).createHandler({
	path: "/api",
});
