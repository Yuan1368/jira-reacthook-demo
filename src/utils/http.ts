import qs from "qs";
import {apiUri} from "./api";
import * as auth from "auth-provider";
import {useAuth} from "../context/auth-context";

interface Config extends RequestInit{
	data?:object;
	token?:string
}

export const http = async (endpoint: string, {data, token, headers, ...customConfig}:Config={})=>{

	let config = {
		method: "GET",
		headers: {
			Authorization: token?`Bearer ${token}`:"",
			"Content-Type":data?'application/json':"",
		},
		...customConfig
	}

	if(config.method.toUpperCase()==="GET"){
		endpoint += `?${qs.stringify(data)}`
	}else{
		config.body = JSON.stringify(data||{})
	}

	// axios 是除了 2xx 外的异常都会抛出， fetch 并不会抛出如 4xx 的异常，需要手动设置
	return window.fetch(`${apiUri}/${endpoint}`, config).then(async res=>{
		if(res.status===401){
			await auth.logout();
			window.location.reload();
			return Promise.reject("请重新登录");
		}

		const data = await res.json();
		if(res.ok){
			return data;
		}else{
			return Promise.reject(data);
		}

	})
}

export const useHttp = ()=>{
	const {user} = useAuth();

	return (...[endpoint, config]:Parameters<typeof http>)=>
		http(endpoint, {...config, token:user?.token})
}