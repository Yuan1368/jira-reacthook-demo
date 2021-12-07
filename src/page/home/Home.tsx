import React, {
	useState,
	useEffect
} from 'react'

import SearchPanel from "./SearchPanel"
import ListTable from "./ListTable"
import {apiUri} from "utils/api"
import * as qs from "qs";
import {cleanObject, useDebounce, useMount} from "../../utils";

const Home = () => {

	const [list, setList] = useState([])
	const [param, setParam] = useState({name: '', personId: ''})
	const [users, setUsers] = useState([])

	useMount(() => {
		fetch(`${apiUri}/users`).then(async response => {
			if (response.ok) {
			}
		})
	})

	const debouncedParam = useDebounce(param, 3000);

	useEffect(() => {
		fetch(`${apiUri}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async res => {
			setList(await res.json())
		})
	}, [debouncedParam])

	return (
		<>
			<SearchPanel setParam={setParam} users={users} param={param}/>
			<ListTable list={list} users={users}/>
		</>
	)
}

export default Home;