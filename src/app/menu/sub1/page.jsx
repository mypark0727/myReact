"use client";
import { useEffect, useState } from "react";
import SearchArea from "@/components/SearchArea";
import Grid from "@/components/Grid";

import gridRowData from "@/api/grid/apiGrid";

const gridColData = [
  {
    field: "id",
    headerName: "id",
    width: 50,
    editable: true,
  },
  {
    field: "name",
    headerName: "name",
    width: 100,
    editable: true,
  },
  {
    field: "username",
    headerName: "username",
    width: 200,
    editable: true,
  },
  {
    field: "email",
    headerName: "email",
    width: 200,
    editable: true,
  },
  {
    field: "phone",
    headerName: "phone",
    width: 200,
    editable: true,
  },
  {
    field: "province",
    headerName: "province",
    width: 200,
    editable: true,
  },
  {
    field: "city",
    headerName: "city",
    width: 200,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "createdAt",
    width: 200,
    editable: true,
  },
  {
    field: "updatedAt",
    headerName: "updatedAt",
    width: 200,
    editable: true,
  },
];

export default function Page() {
  const [apiData, setApiData] = useState(null);
  const [loadStatus, setLoadStatus] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  // api : get grid data
  async function getData() {
    const _params = {
      url: "/users",
    };
    const _data = await gridRowData(_params);
    setApiData(_data);
    setLoadStatus(true);
  }

  return (
    <div className="page-wrap">
      <div className="page-header">
        <h2>메뉴구조관리</h2>
      </div>
      <div className="page-container">
        <section className="section-area">
          <SearchArea></SearchArea>
        </section>

        <section className="section-area">
          <div className="section-title">
            <h3>메뉴구조관리 목록</h3>
          </div>

          {loadStatus && apiData ? (
            <Grid colData={gridColData} rowData={apiData}></Grid>
          ) : (
            <p className="loading-box">Loading...</p>
          )}
        </section>
      </div>
    </div>
  );
}
