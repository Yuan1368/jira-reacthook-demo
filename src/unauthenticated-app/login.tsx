import React from "react";
import { useAuth } from "../context/auth-context";
import { Form, Input } from "antd";
import { LongButton } from "./index";
import { useAsync } from "../utils/use-async";

export const LoginPage = ({ onError }: { onError: (error: Error) => void }) => {
  const { login } = useAuth();
  const { run, isLoading } = useAsync();
  const handleSubmit = (values: { username: string; password: string }) => {
    run(login(values).catch(onError));
  };
  /*	const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
		event.preventDefault();
		// console.log(event.currentTarget.elements)
		const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
		const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
		login({username, password}).then();
	}*/

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        rules={[{ required: true, message: "请输入姓名" }]}
        name={"username"}
      >
        <Input placeholder={"用户名"} id={"username"} type={"text"} />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: "密码" }]}
        name={"password"}
      >
        <Input placeholder={"密码"} id={"password"} type={"password"} />
      </Form.Item>
      <Form.Item>
        <LongButton loading={isLoading} type={"primary"} htmlType={"submit"}>
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};
