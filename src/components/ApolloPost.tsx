import React from "react";
import { gql, useQuery } from "@apollo/client";

const queryString = gql`
	query {
		posts {
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
	const { loading, error, data } = useQuery(queryString);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :</p>;

	return (
		<div>
			<p>
				{data.posts.payload.map((post) => {
					return (
						<div>
							{post.title}: {post.description}
						</div>
					);
				})}
			</p>
		</div>
	);
};

export default ApolloPost;
