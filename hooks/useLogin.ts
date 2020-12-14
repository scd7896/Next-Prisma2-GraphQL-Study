import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { LoginJsendSuccess, LoginMutationVar } from "interfaces";

const loginMutation = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			status
			message
			token
			payload {
				name
				email
				id
			}
		}
	}
`;

const useLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [sendLogin, { error, data }] = useMutation<{ login: LoginJsendSuccess<{}> }, LoginMutationVar>(loginMutation, {
		variables: {
			email,
			password,
		},
	});

	return {
		email,
		setEmail,
		password,
		setPassword,
		sendLogin,
		error,
		data,
	};
};

export default useLogin;
