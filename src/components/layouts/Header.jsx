"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { GnbList } from "@/services/header/GnbList";
import { Button } from "@mui/material";

import { useAtom } from "jotai";
import { gnbStatus } from "@/services/header/GnbList";

import ImgLogo from "@/assets/images/layouts/i-btn-menu.png";
import ImgProfile from "@/assets/images/layouts/i-profile-green.png";

export default function Header(props) {
  const router = useRouter();
  const pathname = usePathname();

  // 아이디 비교 변수
  const [isGnbBtnId, setIsGnbBtnId] = useState("");

  // gnb button click handler
  function handleGnb(id, value) {
    setIsGnbBtnId(id);
    props.setGnbStatus(value);
    props.setLnbStatus(true);
  }

  // reset gnb lnb
  function resetLnbSelected() {
    setIsGnbBtnId(null);
    props.setGnbStatus(null);
    props.setLnbStatus(false);
    props.setSelectedLnbItems([]);
    props.setExpandedItems([]);
  }

  // 로고 클릭
  function movePage(link) {
    router.push(link);
    resetLnbSelected();
  }

  // setLnbStatus toggle
  function togglesetLnbStatus() {
    const _lnbStatus = props.isLnbStatus;
    props.setLnbStatus(!_lnbStatus);

    // gnb가 활성화 안되었을경우 막기
    if (!isGnbBtnId) {
      props.setLnbStatus(false);
    }
  }

  return (
    <div className="header-wrap">
      <button
        className="btn-menu"
        onClick={() => {
          togglesetLnbStatus();
        }}
      >
        <img src={ImgLogo.src} alt="2뎁스메뉴버튼" />
      </button>

      <h1 className="logo">
        <button
          onClick={() => {
            movePage("/");
          }}
        >
          MyP
        </button>
      </h1>
      <ul className="gnb-area">
        {GnbList.map((list, i, arr) => {
          return (
            <li key={i}>
              <button
                className={list.id === isGnbBtnId ? "active" : ""}
                onClick={() => handleGnb(list.id, list.value)}
              >
                {list.name}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="util-area">
        <button className="btn-profile">
          <img src={ImgProfile.src} alt="프로필-IP" />
          <span className="txt">박문영</span>
        </button>

        <div className="log-area">
          <button>LOGOUT</button>
          <button className="blind">LOGIN</button>
        </div>
      </div>
    </div>
  );
}
