import React, {FormEvent} from "react";
import {useAuth} from "../context/auth-context";

export const RegisterPage = () => {

	const {user, register} = useAuth();

	const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
		event.preventDefault();
		// console.log(event.currentTarget.elements)
		const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
		const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
		register({username, password}).then();
	}

	return (
		<form onSubmit={handleSubmit}>
			{user?<div>
				<span>用户名:{user.name}</span>
				<span>账号：{user.token}</span>
			</div>:null}
			<div>
				<label htmlFor="username">
					用户名
				</label>
				<input type="text" id={"username"}/>
			</div>
			<div>
				<label htmlFor="password">
					密码
				</label>
				<input type="password" id={"password"}/>
			</div>

			<button type={"submit"}>注册</button>
		</form>
	)
}