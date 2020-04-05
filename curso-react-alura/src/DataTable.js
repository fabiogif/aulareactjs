import React, { Component } from "react";
import { render } from "@testing-library/react";

const DataTable = (props) => {
  let linhas = props.dados.map((item) => (
    <tr key={item.id}>
      {props.colunas.map((coluna) => (
        <td key={`${item.id} ${item[coluna]}`}>{item[coluna]}</td>
      ))}
    </tr>
  ));

  return (
    <table className="centered highlight">
      <thead>
        <tr>
          <th>{props.titulo} </th>
        </tr>
      </thead>
      <tbody>{linhas}</tbody>
    </table>
  );
};

export default DataTable;
