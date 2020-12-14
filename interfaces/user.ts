import { JsendSuccess } from "./index";
export interface LoginMutationVar {
	email: string;
	password: string;
}

export interface LoginJsendSuccess<T> extends JsendSuccess<T> {
	token: string;
}
