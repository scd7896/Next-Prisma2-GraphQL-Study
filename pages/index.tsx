import Layout from "../components/Layout";
import axios from "axios";

const IndexPage = () => {
	const userAddTest = () => {
		axios.post("/api/user", { email: "test1@test.com", name: "test" });
	};
	const userGetTest = async () => {
		try {
			const res = await axios.get("/api/user");
			console.log(res.data);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Layout title="Home | Next.js + TypeScript Example">
			<h1>Hello Next.js 👋</h1>
			<p onClick={userAddTest}>눌러라눌러</p>
			<p onClick={userGetTest}>가져와라가져와</p>
		</Layout>
	);
};

export default IndexPage;
