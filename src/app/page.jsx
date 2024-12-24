"use client";

import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";

import PopupDefault from "@/components/popups/PopupDefault";
import PopupSmall from "@/components/popups/PopupSmall";

export default function Home() {
  const [popOpen, setPopOpen] = useState(false);
  const [popId, setPopId] = useState(null);

  function handlePopOpen(id) {
    setPopId(id);
    setPopOpen(true);
  }

  // select
  const [selectItem, setSelectItem] = useState("");
  function handleSelectChange(e) {
    console.log(e.target.value);
    setSelectItem(e.target.value);
  }
  const selectOptions = [
    { value: 1, text: "option1" },
    { value: 2, text: "option2" },
    { value: 3, text: "option3" },
  ];

  return (
    <div className="guide-wrap">
      <ul className="guide-area">
        <li>
          <h3>UI컴포넌트</h3>
          <div className="guide-box"></div>
        </li>

        <li>
          <h3>버튼</h3>
          <div className="guide-box">
            <Button className="btn line-gray">
              <span className="txt">닫기</span>
            </Button>
            <Button className="btn bgc-primary">
              <span className="txt">저장</span>
            </Button>
          </div>
        </li>

        <li>
          <h3>폼요소</h3>
          <div className="guide-box">
            <div className="form-box">
              <FormControl className="select-box">
                <InputLabel id="select-id-1" className="select-label">
                  Select
                </InputLabel>
                <Select
                  labelId="select-id-1"
                  id="select-1"
                  value={selectItem}
                  label="Select"
                  onChange={handleSelectChange}
                >
                  {
                    /* <MenuItem value={10}>Ten</MenuItem> */
                    selectOptions.map((option, i) => {
                      return (
                        <MenuItem value={option.value} key={i}>
                          {option.text}
                        </MenuItem>
                      );
                    })
                  }
                </Select>
              </FormControl>
            </div>
          </div>
        </li>

        <li>
          <h3>팝업</h3>
          <div className="guide-box">
            <Button
              className="btn bgc-primary"
              onClick={() => {
                handlePopOpen("default");
              }}
            >
              <span className="txt">팝업 열기 (Default)</span>
            </Button>
            <br />
            <br />
            <Button
              className="btn bgc-primary"
              onClick={() => {
                handlePopOpen("small");
              }}
            >
              <span className="txt">팝업 열기 (Small)</span>
            </Button>

            {popId === "default" && (
              <PopupDefault
                popOpen={popOpen}
                setPopOpen={setPopOpen}
              ></PopupDefault>
            )}

            {popId === "small" && (
              <PopupSmall
                popOpen={popOpen}
                setPopOpen={setPopOpen}
              ></PopupSmall>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
}
