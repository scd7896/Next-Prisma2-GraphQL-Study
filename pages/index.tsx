import { ApolloProvider } from "@apollo/client";
import ApolloPost from "src/components/ApolloPost";
import { client } from "utils/apollo";

const IndexPage = () => {
	return (
		<ApolloProvider client={client}>
			<ApolloPost />
		</ApolloProvider>
	);
};

export default IndexPage;
