import { useLogin } from "hooks";
import { useRouter } from "next/dist/client/router";

import LoginForm from "src/components/Login/Form";

const LoginIndex = () => {
	const router = useRouter();
	const { email, setEmail, password, setPassword, sendLogin, error, data } = useLogin();
	console.log(error);
	if (data) {
		const redierectURL = decodeURIComponent(router.query.redirect as string);

		if (data.login.status === "success") {
			router.push("/");
		} else {
			alert(data.login.message);
		}
	}
	return (
		<LoginForm
			email={email}
			setEmail={setEmail}
			setPassword={setPassword}
			password={password}
			onSubmit={() => sendLogin()}
		/>
	);
};

export default LoginIndex;
