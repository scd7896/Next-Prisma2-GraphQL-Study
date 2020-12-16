import * as React from "react";
import { useState } from "react";
import { gql } from "@apollo/client";
import { useMutationErrorWrapper } from "hooks";
import { NexusGenArgTypes, NexusGenFieldTypes } from "interfaces";

const ADD_POSTS = gql`
	mutation ADD_POSTS($title: String!, $description: String!) {
		addPosts(title: $title, description: $description) {
			status
		}
	}
`;

const ApolloPostMutation = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const { mutation: addPosts, data } = useMutationErrorWrapper<
		NexusGenFieldTypes["Mutation"],
		NexusGenArgTypes["Mutation"]["addPosts"]
	>(ADD_POSTS, { variables: { title, description } });

	const submitListner = React.useCallback(() => {
		addPosts();
	}, []);
	return (
		<div>
			{data?.addPosts && <div>성공!</div>}
			<div>
				<label>
					타이틀: <input onChange={(e) => setTitle(e.target.value)} />
				</label>
				<label>
					내용: <input onChange={(e) => setDescription(e.target.value)}></input>
				</label>
				<button type="submit" onClick={submitListner}>
					전송하기
				</button>
			</div>
		</div>
	);
};

export default ApolloPostMutation;
