import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import ApolloPostMutation from "./ApolloPostMutationForm";
import { NexusGenArgTypes, NexusGenFieldTypes } from "interfaces";
import { RowDiv } from "./ApolloPost.styles";
const GET_POSTS = gql`
	query Posts($offset: Int!, $size: Int!) {
		posts(offset: $offset, size: $size) {
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
	const { loading, error, data } = useQuery<
		{ posts: NexusGenFieldTypes["Query"]["posts"] },
		NexusGenArgTypes["Query"]["posts"]
	>(GET_POSTS, {
		variables: { offset: 1, size: 5 },
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

				{data?.posts?.payload &&
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
