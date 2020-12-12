export interface Post {
	id: number;
	title: string;
	description?: string;
	author: {
		email: string;
		name: string;
	};
}

export interface PostQueryVar {
	id: number;
}
