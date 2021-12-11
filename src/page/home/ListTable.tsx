import React, { useEffect } from "react";
import { User } from "./SearchPanel";
import { Table } from "antd";

export interface List {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
  token: string;
}

interface ListTableProp {
  list: List[];
  users: User[];
}

const ListTable = ({ list, users }: ListTableProp) => {
  useEffect(() => {
    console.log("list", list);
  }, [list]);

  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name}
              </span>
            );
          },
        },
      ]}
      dataSource={list}
    />
  );
};

export default ListTable;
