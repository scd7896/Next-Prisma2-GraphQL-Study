import type { AppProps /*, AppContext */ } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "utils/apollo";
import { GlobalStyle } from "utils/styles/reset";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ApolloProvider>
	);
}
export default MyApp;
