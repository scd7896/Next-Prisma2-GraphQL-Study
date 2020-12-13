import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import ApolloPostMutation from "./ApolloPostMutationForm";
import { JsendSuccess, Post, PostQueryVar } from "interfaces";
import { RowDiv } from "./ApolloPost.styles";
const GET_POSTS = gql`
	query GET_POSTS($id: Int!) {
		posts(id: $id) {
			status
			payload {
				id
				title
				description
				author {
					email
					name
				}
			}
		}
	}
`;

const ApolloPost = () => {
	const [test, setTest] = useState(1);
	const { loading, error, data } = useQuery<{ posts: JsendSuccess<Post[]> }, PostQueryVar>(GET_POSTS, {
		variables: { id: test },
	});
	if (loading) return <RowDiv>Loading...</RowDiv>;
	if (error) return <p>error {error.message}</p>;

	return (
		<div>
			<p>
				<button
					onClick={() => {
						setTest((prev) => prev + 1);
					}}
				>
					클릭을 해보자
				</button>

				{data &&
					data.posts.payload.map((post) => {
						return (
							<RowDiv>
								{post.title}: {post.description}
							</RowDiv>
						);
					})}
			</p>
			<ApolloPostMutation />
		</div>
	);
};

export default ApolloPost;
