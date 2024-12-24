"use client";

import React, { useState, useEffect } from "react";
import { Button, Dialog } from "@mui/material";
import CardArea from "@/components/CardArea";

export default function PopupDefault(props) {
  // 팝업닫기
  function handlePopClose() {
    props.setPopOpen(false);
  }

  console.log(props.popData);

  // 저장
  function saveData() {
    alert("저장완료");
    handlePopClose();
  }

  return (
    <Dialog
      open={props.popOpen}
      onClose={handlePopClose}
      className="size-default"
    >
      <div className="popup-area">
        <div className="popup-header">
          <h2 className="tit">id : {props.popData.id}</h2>
        </div>
        <div className="popup-body">
          <CardArea data={props.popData} />
        </div>
        <div className="popup-footer">
          <div className="flex-area">
            <div className="right-box">
              <Button
                className="btn line-gray"
                onClick={() => {
                  handlePopClose();
                }}
              >
                <span className="txt">닫기</span>
              </Button>
              <Button className="btn bgc-primary" onClick={saveData}>
                <span className="txt">저장</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
