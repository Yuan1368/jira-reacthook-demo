import {LoginPage} from "./login";
import {RegisterPage} from "./register";
import React, {useState} from "react";
import {Card, Divider} from "antd";
import styled from "@emotion/styled";
import logo from "assets/logo.svg";
import right from "assets/right.svg";
import left from "assets/left.svg";

export const UnauthenticatedApp = () => {

	const [isRegister, setIsRegister] = useState(false);

	return (
		<Container>
			<Headers></Headers>

			<ShadowCard>
				{
					isRegister ? <RegisterPage/> : <LoginPage/>
				}
				<Divider />
				<a onClick={() => setIsRegister(!isRegister)}>{isRegister ? "已经有账号了？请登录" : "没有账号？快注册一个体验吧"}</a>
			</ShadowCard>
		</Container>
	)
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

const ShadowCard = styled(Card)`
	width:40rem;
	min-height: 56rem;
	padding: 3.2rem 4rem;
	border-radius: 0.3rem;
	box-sizing: border-box;
	box-shadow: rgba(0,0,0,0.1) 0 0 10px;
	text-align: center;
`;

const Headers = styled.header`
	background: url(${logo}) no-repeat center;
	padding: 5rem 0;
	background-size: 8rem;
	width: 100%;
`