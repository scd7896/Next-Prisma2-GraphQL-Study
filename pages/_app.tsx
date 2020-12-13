import type { AppProps /*, AppContext */ } from "next/app";
import { GlobalStyle } from "utils/styles/reset";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
