import React, {useState} from 'react';
import * as auth from "auth-provider";
import {User} from "../page/home/SearchPanel";

const AuthContext = React.createContext<{
	user: User | null;
	login: (form: AuthForm) => Promise<void>;
	register: (form: AuthForm) => Promise<void>;
	layout: () => Promise<void>
} | undefined>(undefined);

AuthContext.displayName = "auth-provider";

interface AuthForm {
	username: string;
	password: string
};

export const AuthProvide = ({children}:{children: React.ReactNode}) => {

	const [user, setUser] = useState<User | null>(null);
	const login = (form: AuthForm) => auth.login(form).then(user => setUser(user));
	const register = (form: AuthForm) => auth.register(form).then(user => setUser(user));
	const layout = () => auth.logout().then(() => setUser(null));

	return <AuthContext.Provider children={children} value={{user, login, register, layout}}/>

}

export const useAuth = ()=>{
	const context = React.useContext(AuthContext);

	if(!context){
		throw new Error("useAuth 必须在 AuthProvider 中使用");
	}else{
		return context;
	}
}
