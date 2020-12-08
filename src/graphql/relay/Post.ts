import { graphql } from "react-relay";
const query = graphql`
	# 이런식으로 주석도 쓸 수가 있다 이마리야
	query {
		posts {
			id
			title
			author {
				email
				name
			}
		}
	}
`;
