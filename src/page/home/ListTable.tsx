import React, { useEffect } from "react";
import { User } from "./SearchPanel";
import { Table } from "antd";
import dayjs from "dayjs";

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
          title: "部门名称",
          dataIndex: "organization",
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
        {
          title: "创建时间",
          render(value, project) {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format("YYYY-MM-DD")
                  : "无"}
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
