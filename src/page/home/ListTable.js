import React from // useEffect,
// useState
"react";

const ListTable = ({ list, users }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>名称</td>
            <td>负责人</td>
          </tr>
        </thead>
        {list.map((l) => {
          return (
            <tbody>
              <tr key={l.id}>
                <td>{l.name}</td>
                <td>{users.find((user) => user.id === l.personId)?.name}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default ListTable;
