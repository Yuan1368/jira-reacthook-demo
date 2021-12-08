import React, {useEffect} from "react";
import { User } from "./SearchPanel";

export interface List {
  id:number;
  name:string;
  personId:number;
  organization: string;
  created:number;
  token: string
}

interface ListTableProp {
  list: List[];
  users: User[]
}

const ListTable = ({ list, users }:ListTableProp) => {

  useEffect(()=>{
  console.log("list", list)
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
        {list.length?list.map((l) => {
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
