"use client";

import React, { useState, useEffect } from "react";
import { Button, Dialog } from "@mui/material";

export default function PopupDefault(props) {
  // 팝업닫기
  function handlePopClose() {
    props.setPopOpen(false);
  }

  return (
    <Dialog
      open={props.popOpen}
      onClose={handlePopClose}
      className="size-small"
    >
      <div className="popup-area">
        <div className="popup-header">
          <h2 className="tit">팝업 타이틀</h2>
        </div>
        <div className="popup-body">
          <div style={{ height: 300 + "px", outline: `1px solid black` }}>
            팝업 바디
          </div>
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
              <Button className="btn bgc-primary">
                <span className="txt">저장</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
