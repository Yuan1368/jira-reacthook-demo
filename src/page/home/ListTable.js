import React, {useEffect} from "react";

const ListTable = ({ list, users }) => {
useEffect(()=>{
  console.log(list)
},[list])
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>名称</td>
            <td>负责人</td>
          </tr>
        </thead>
        <tbody>
        {list?list.map((l) => {
          return (
              <tr key={l.id}>
                <td>{l.name}</td>
                <td>{users.find(user=>user.id===l.personId)?.name}</td>
              </tr>
          );
        }):null}
        </tbody>
      </table>
    </>
  );
};

export default ListTable;
