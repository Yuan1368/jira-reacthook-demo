import { EpicScreen } from "page/epic";
import { KanbanScreen } from "page/kanban";
import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { Link } from "react-router-dom";

export const ListScreen = () => {
  return (
    <>
      <h1>ListScreen</h1>
      <Link to={"kanban"}>kanban</Link>
      <Link to={"epic"}>epic</Link>
      <Routes>
        <Route path={"kanban"} element={<KanbanScreen />} />
        <Route path={"epic"} element={<EpicScreen />} />
        <Route path={"*"} element={<Navigate to={"kanban"} />} />
      </Routes>
    </>
  );
};
