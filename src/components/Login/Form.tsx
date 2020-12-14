import React, { FC } from "react";
import { EmailInput, FormWrapperDiv, PasswordInput } from "./Form.styles";

interface IProp {
	email: string;
	setEmail: (email: string) => void;
	password: string;
	setPassword: (password: string) => void;
	onSubmit: () => void;
}

const LoginForm: FC<IProp> = ({ email, setEmail, password, setPassword, onSubmit }) => {
	return (
		<FormWrapperDiv>
			<div>
				이메일 : <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div>
				비밀번호: <PasswordInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
			</div>
			<button onClick={onSubmit}>로그인하기</button>
		</FormWrapperDiv>
	);
};

export default LoginForm;
