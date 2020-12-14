import * as React from "react";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

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
	const [addPosts, { error, data }] = useMutation(ADD_POSTS, {
		variables: {
			title,
			description,
		},
	});
	console.log(description);
	const submitListner = React.useCallback(() => {
		console.log("test");

		addPosts();
	}, []);
	return (
		<div>
			{data && data.addPosts && <div>성공!</div>}
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
