import React, { useEffect, useState } from "react";
import "../App.css";
import { getWebhookUrl } from "../backend.js/call";
import { TableList } from "../component/table";

export const TablePage = () => {
  const [tableData, setTableData] = useState([

  ]);

  const [tableHeader, setTableHeader] = useState([
'Contract Address','Contract Alias','Token Symbol','Token Name'
  ]);
  const callData = async () => {
    const returnData = await getWebhookUrl();
    setTableData(returnData);
  };
  useEffect(() => {
    callData();
  }, []);

  return <TableList tableData={tableData} tableHeader={tableHeader} />;
};
