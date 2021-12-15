import React, { useState } from "react";
import SearchPanel from "./SearchPanel";
import ListTable from "./ListTable";
import { useDebounce } from "../../utils";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useList } from "../../utils/project";
import { useUsers } from "../../utils/user";

const Home = () => {
  const [param, setParam] = useState({ name: "", personId: "" });

  const debouncedParam = useDebounce(param, 1000);

  const { isLoading, error, data: list } = useList(debouncedParam);
  const { data: users } = useUsers();

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel setParam={setParam} users={users || []} param={param} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <ListTable
        dataSource={list || []}
        users={users || []}
        loading={isLoading}
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 3.2rem;
`;
