import React from "react"

const SearchPanel = ({users, param, setParam})=>{
	// const [users, setUsers] = useState([]);
	return (
		<>
			<form>
				<div>
					<input type="text" value={param.value} onChange={evt => setParam({
						...param,
						name:evt.target.value
					})} />

					<select value={param.value} onChange={evt => setParam({
						...param,
						personId: evt.target.value
					})} >

					<option value={''}>负责人</option>
					{
						users.map((user,index)=><option key={index} value={user.id}>{user.name}</option>)
					}
					</select>
				</div>
			</form>
		</>
	)
}

export default SearchPanel