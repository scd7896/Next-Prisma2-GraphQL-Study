import { useLogin } from "hooks";
import { useRouter } from "next/dist/client/router";

import LoginForm from "src/components/Login/Form";
import cookie from "utils/cookie";
const LoginIndex = () => {
	const router = useRouter();
	const { email, setEmail, password, setPassword, sendLogin, error, data } = useLogin();
	if (data) {
		const redierectURL = decodeURIComponent(router.query.redirect as string);
		console.log(data);
		if (data.login.status === "success") {
			router.push("/");
			cookie.setCookie("token", data.login.token);
			localStorage.setItem("token", data.login.token);
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
