import Layout from "../components/Layout";
import axios from "axios";

const IndexPage = () => {
	const userAddTest = () => {
		axios.post("/api/user", { email: "test1@test.com", name: "test" });
	};
	return (
		<Layout title="Home | Next.js + TypeScript Example">
			<h1>Hello Next.js 👋</h1>
			<p onClick={userAddTest}>눌러라눌러</p>
		</Layout>
	);
};

export default IndexPage;
