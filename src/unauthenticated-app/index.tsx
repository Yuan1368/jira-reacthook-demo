import {LoginPage} from "./login";
import {RegisterPage} from "./register";
import React, {useState} from "react";

export const UnauthenticatedApp = ()=>{

	const [isRegister, setIsRegister] = useState(false);

	return	<div>
		{
			isRegister?<RegisterPage/>:<LoginPage/>
		}
		<button onClick={()=>setIsRegister(!isRegister)}>切换{isRegister?"登录":"注册"}</button>
	</div>
}