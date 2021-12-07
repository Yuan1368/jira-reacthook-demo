import {AuthProvide} from "./auth-context";
import {ReactNode} from "react";

export const AppProviders = ({children}: { children: ReactNode }) => {
	return <AuthProvide>
		{children}
	</AuthProvide>

}