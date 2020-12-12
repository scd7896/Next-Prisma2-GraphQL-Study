import { ApolloProvider } from "@apollo/client";
import ApolloPost from "src/components/ApolloPost";
import { client } from "utils/apollo";
import { GlobalStyle } from "utils/styles/reset";
const IndexPage = () => {
	return (
		<ApolloProvider client={client}>
			<GlobalStyle />
			<ApolloPost />
		</ApolloProvider>
	);
};

export default IndexPage;
