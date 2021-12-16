import React from "react";
import { useAuth } from "../context/auth-context";
import { Form, Input } from "antd";
import { LongButton } from "./index";
import { useAsync } from "../utils/use-async";

export const RegisterPage = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { register } = useAuth();
  const { isLoading, run } = useAsync(undefined, { throwOnError: true });

  const handleSubmit = async ({
    cpassword,
    ...values
  }: {
    username: string;
    password: string;
    cpassword: string;
  }) => {
    if (cpassword !== values.password) {
      onError(new Error("请确认两次输入的密码保持一致"));
      return;
    }
    try {
      await run(register(values));
    } catch (e) {
      onError(e);
    }
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
      <Form.Item
        rules={[{ required: true, message: "确认密码" }]}
        name={"cpassword"}
      >
        <Input placeholder={"确认密码"} id={"cpassword"} type={"password"} />
      </Form.Item>
      <Form.Item>
        <LongButton type={"primary"} htmlType={"submit"} loading={isLoading}>
          注册
        </LongButton>
      </Form.Item>
    </Form>
  );
};
