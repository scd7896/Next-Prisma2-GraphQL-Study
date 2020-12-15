// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
	id: number;
	name: string;
};

export interface JsendSuccess<T> {
	status: "success";
	message?: string;
	payload: T;
}

export * from "./post";
export * from "./user";
export * from "./graphql/nexus-typegen";
