import React from 'react'
import { Table } from 'semantic-ui-react';

export const TableList = ({tableData, tableHeader}) => {

  return (
    <Table celled>
      <Table.Header>
        <Table.Row >
          {tableHeader.map((row, index) => (
            <Table.HeaderCell>{row}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {tableData.map((row, index) => (
          <Table.Row key={index}>
            <Table.Cell>{row.address}</Table.Cell>
            <Table.Cell>{row.alias}</Table.Cell>
            <Table.Cell>{row.symbol}</Table.Cell>
            <Table.Cell>{row.name}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};