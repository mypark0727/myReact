"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Button } from "@mui/material";
import SearchArea from "@/components/SearchArea";
import Grid from "@/components/Grid";
import gridRowData from "@/api/grid/apiGrid";

import PopupGridDetail from "@/app/menu/sub0/PopupGridDetail";

const gridColData = [
  {
    field: "id",
    headerName: "id",
    width: 100,
    editable: true,
    renderType: "btnPop",
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
    renderType: "linkIn",
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

  const [popOpen, setPopOpen] = useState(false); // 버튼클릭시 팝업 상태
  const [popData, setPopData] = useState(null); // 팝업에 내려줄 데이터

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    getData("/users");
  }, []);

  // api : get grid data
  async function getData(path) {
    const _params = {
      url: path,
    };
    const _data = await gridRowData(_params);
    setApiData(_data);
    setLoadStatus(true);
  }

  // 팝업 상세 데이터
  async function getPopDetailData(userId) {
    const _params = {
      url: `/users/${userId}`,
    };

    const _data = await gridRowData(_params);
    setPopData(_data);
  }

  const gridHandlers = {
    onClickPopOpen: handleGridPopOpen,
    onClickPageMove: handlePageMove,
    onClickAlert: handleAlert,
  };

  // 핸들러:팝업호출
  async function handleGridPopOpen(rowData) {
    console.log(rowData);
    await getPopDetailData(rowData.id);
    setPopOpen(true);
  }

  // 핸들러:화면이동
  function handlePageMove(params) {
    console.log("pageMove params : ");
    console.log(params);

    router.push(`/menu/sub0/${params}`);
  }

  // 핸들러:알럿
  function handleAlert() {
    alert("alert");
  }

  return (
    <div className="page-wrap">
      <div className="page-header">
        <h2>화면정보관리</h2>
      </div>
      <div className="page-container">
        <section className="section-area">
          <SearchArea></SearchArea>
        </section>

        <section className="section-area">
          <div className="section-title">
            <h3>화면정보관리 목록</h3>
          </div>

          {loadStatus && apiData ? (
            <Grid
              colData={gridColData}
              rowData={apiData}
              gridHandlers={gridHandlers}
            ></Grid>
          ) : (
            <p className="loading-box">Loading...</p>
          )}
        </section>
      </div>

      {popOpen && (
        <PopupGridDetail
          popOpen={popOpen}
          setPopOpen={setPopOpen}
          popData={popData}
        />
      )}
    </div>
  );
}
