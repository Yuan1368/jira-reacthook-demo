import React,{
	useState,
	useEffect
} from 'react'

import SearchPanel from "./SearchPanel"
import ListTable from "./ListTable"
import {apiUri} from "lib/api"

const Home = ()=>{

	const [list, setList] = useState([])
	const [param, setParam] = useState({name:'', personId: ''})
	const [users, setUsers] = useState([])

	useEffect(()=>{
		fetch(`${apiUri}/projects`).then( async res => {
			setList(await res.json())
		})
	},[])

	useEffect( ()=>{
		fetch(`${apiUri}/users`).then( async response => {
			if(response.ok){
				setUsers(await response.json())
			}
		})
	},[])

	return (
		<>
			<SearchPanel setParam={setParam} users={users} param={param}/>
			<ListTable list={list} users={users}/>
		</>
	)
}

export default Home;