import React, { useState, useEffect } from "react";

import SearchPanel from "./SearchPanel";
import ListTable from "./ListTable";
import { cleanObject, useDebounce, useMount } from "../../utils";
import { useHttp } from "../../utils/http";
import styled from "@emotion/styled";

const Home = () => {
  const [list, setList] = useState([]);
  const [param, setParam] = useState({ name: "", personId: "" });
  const [users, setUsers] = useState([]);

  const client = useHttp();

  const debouncedParam = useDebounce(param, 1000);

  useEffect(() => {
    client(`projects`, { data: cleanObject(debouncedParam) }).then(setList);
  }, [debouncedParam]);

  useMount(() => {
    client(`users`).then(setUsers);
  });

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel setParam={setParam} users={users} param={param} />
      <ListTable list={list} users={users} />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 3.2rem;
`;
