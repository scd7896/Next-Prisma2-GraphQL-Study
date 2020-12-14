import { declarativeWrappingPlugin, makeSchema } from "@nexus/schema";
import { ApolloServer } from "apollo-server-micro";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import path from "path";
import { types } from "../../models";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
// const prisma = new PrismaClient({ log: ["query", "info", "warn"] });
const getUsers = (token: string) => {
	return jwt.verify(token, "test-secret");
};

const prisma = new PrismaClient();
export const schema = makeSchema({
	types,
	plugins: [nexusSchemaPrisma({ experimentalCRUD: true }), declarativeWrappingPlugin()],
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

export default new ApolloServer({
	schema,
	context: (ctx) => {
		let user = null;
		if (ctx.req.headers.authorization) {
			user = getUsers(ctx.req.headers.authorization.split(" ")[1]);
		}
		return {
			...ctx,
			prisma,
			user,
		};
	},
}).createHandler({
	path: "/api/graphql",
});
