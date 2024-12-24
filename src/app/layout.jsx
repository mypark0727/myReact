"use client";

import "@/assets/styles/globals.scss";

import React, { useState, useEffect } from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Header from "@/components/layouts/Header";
import Lnb from "@/components/layouts/Lnb";
import Footer from "@/components/layouts/Footer";

// export const metadata = {
//   title: "project",
//   description: "project description",
// };

export default function RootLayout({ children }) {
  const [gnbStatus, setGnbStatus] = useState(null);
  const [isLnbStatus, setLnbStatus] = useState(false);
  const [selectedLnbItems, setSelectedLnbItems] = useState([]); // 선택된 lnb 아이템
  //const [isLnbOpen, setLnbOpen] = useState([]); // 현재 열린 lnb
  const [expandedItems, setExpandedItems] = useState([]); // 현재 열린 lnb

  return (
    <html lang="ko">
      <head>
        <title>관리자시스템</title>
        <link rel="icon" href="/favi.ico" />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <main className={isLnbStatus ? "main-wrap active" : "main-wrap"}>
            <Header
              setGnbStatus={setGnbStatus}
              isLnbStatus={isLnbStatus}
              setLnbStatus={setLnbStatus}
              setSelectedLnbItems={setSelectedLnbItems}
              selectedLnbItems={selectedLnbItems}
              expandedItems={expandedItems}
              setExpandedItems={setExpandedItems}
            ></Header>
            <Lnb
              setLnbStatus={setLnbStatus}
              gnbStatus={gnbStatus}
              className={isLnbStatus ? "active" : ""}
              selectedLnbItems={selectedLnbItems}
              setSelectedLnbItems={setSelectedLnbItems}
              expandedItems={expandedItems}
              setExpandedItems={setExpandedItems}
            ></Lnb>
            {children}
          </main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
