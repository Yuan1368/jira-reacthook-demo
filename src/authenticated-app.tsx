import Home from "./page/home/Home";
import {useAuth} from "./context/auth-context";

export const AuthenticatedApp = ()=>{

	const {layout} = useAuth();

	return <>
		<button onClick={()=>layout()}>登出</button>
		<Home/>
	</>
}