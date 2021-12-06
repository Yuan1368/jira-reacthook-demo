import React, {FormEvent} from 'react';
import {apiUri} from "../../utils/api";

export const LoginPage = ()=>{

	const login = (param:{username:string, password:string})=> {
		fetch(`${apiUri}/login`,{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body: JSON.stringify(param)
		}).then(
			async (res) => {
				if(res.ok){
					console.log(JSON.parse(await res.json()));
				}
			}
		)
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
		event.preventDefault();
		// console.log(event.currentTarget.elements)
		const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
		const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
		login({username, password});
	}

	return (
		<form onSubmit={handleSubmit}>
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

			<button type={"submit"}>提交</button>
		</form>
	)
}