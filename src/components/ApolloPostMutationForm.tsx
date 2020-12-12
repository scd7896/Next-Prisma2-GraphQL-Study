import * as React from "react";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const ADD_POSTS = gql`
	mutation ADD_POSTS($authorEmail: String!, $title: String!, $description: String!) {
		addPosts(authorEmail: $authorEmail, title: $title, description: $description) {
			status
		}
	}
`;
const ApolloPostMutation = () => {
	const [authorEmail, setAuthorEmail] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [addPosts, { error, data }] = useMutation(ADD_POSTS, {
		variables: {
			authorEmail,
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
					이메일
					<input onChange={(e) => setAuthorEmail(e.target.value)} />
				</label>
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
