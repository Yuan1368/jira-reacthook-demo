import React, {
	useState,
	useEffect
} from 'react'

import SearchPanel from "./SearchPanel"
import ListTable from "./ListTable"
import {cleanObject, useDebounce, useMount} from "../../utils";
import {useHttp} from "../../utils/http";

const Home = () => {

	const [list, setList] = useState([])
	const [param, setParam] = useState({name: '', personId: ''})
	const [users, setUsers] = useState([])

	const client = useHttp();

	const debouncedParam = useDebounce(param, 1000);

	useEffect(() => {
		client(`projects`, {data: cleanObject(debouncedParam)}).then(setList)
	}, [debouncedParam])

	useMount(() => {
		client(`users`,).then(setUsers)
	})

	return (
		<>
			<SearchPanel setParam={setParam} users={users} param={param}/>
			<ListTable list={list} users={users}/>
		</>
	)
}

export default Home;