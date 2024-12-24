"use client";

import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";

// api 호출 데이터
export default function Grid(props) {
  // 셀 타입 렌더러
  function getRenderCell(type) {
    if (type === "btnPop") {
      return (params) => (
        <Button
          className="btn line-gray size-s"
          onClick={() => {
            props.gridHandlers.onClickPopOpen(params);
          }}
        >
          <span className="txt">id : {params.value}</span>
        </Button>
      );
    } else if (type === "linkIn") {
      return (params) => (
        <Button
          className="btn underline-primary size-s"
          onClick={() => {
            props.gridHandlers.onClickPageMove(params.row.id);
          }}
        >
          <span className="txt">{params.value}</span>
        </Button>
      );
    } else {
      return undefined;
    }
  }

  // 컬럼데이터 렌더링 변환
  const columnsData = props.colData.map(function (col) {
    return {
      ...col,
      renderCell: getRenderCell(col.renderType),
    };
  });

  return (
    <div className="grid-wrap">
      <div className="flex-side-area">
        <div className="left-area">
          <span className="account">
            총 <b className="num">{props?.rowData?.length || "-"}</b>건
          </span>
        </div>
        <div className="right-area">
          <Button variant="outlined" className="btn line-gray size-s">
            <i className="icon i-14-del-row"></i>
            <span className="txt">행삭제</span>
          </Button>
          <Button variant="outlined" className="btn line-gray size-s">
            <i className="icon i-14-add-row"></i>
            <span className="txt">행추가</span>
          </Button>
          <Button variant="outlined" className="btn line-gray size-s">
            <i className="icon i-14-reset"></i>
            <span className="txt">초기화</span>
          </Button>
          <Button variant="contained" className="btn bgc-primary size-s">
            <span className="txt">저장</span>
          </Button>
        </div>
      </div>

      <DataGrid
        className="grid-area"
        columns={columnsData}
        rows={props.rowData}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnMenu
        columnHeaderHeight="40"
      />
    </div>
  );
}
