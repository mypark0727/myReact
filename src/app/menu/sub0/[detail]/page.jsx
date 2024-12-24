"use client";

import { useEffect, useState } from "react";
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";
import { Button } from "@mui/material";
import CardArea from "@/components/CardArea";
import { getDetail } from "@/api/detail/apiDetail";

export default function DetailPage(props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [apiData, setApiData] = useState(null);
  const [loadStatus, setLoadStatus] = useState(false);

  //console.log(params); // - {detail:'1'}

  useEffect(() => {
    getDetailData(params.detail);
  }, []);

  // api : get data
  async function getDetailData(path) {
    const _params = {
      url: "/users/" + path,
    };
    const _data = await getDetail(_params);

    setApiData(_data);
    setLoadStatus(true);
  }

  // 핸들러:화면이동
  function handlePageMove() {
    router.push(`/menu/sub0`);
  }

  return (
    <div className="page-wrap">
      <div className="page-header">
        <h2>선수수익 청구 등록</h2>
      </div>

      <div className="page-container">
        <section className="section-area">
          <div className="section-title">
            <h3>기본정보</h3>
          </div>

          {loadStatus && <CardArea data={apiData || null} />}

          {loadStatus && (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    {Object.entries(apiData).map(([key, value]) => {
                      return <th key={key}>{key}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {Object.entries(apiData).map(([key, value]) => {
                      return <td key={key}>{value}</td>;
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>

      <div className="page-footer">
        <div className="flex-area">
          <div className="right-box">
            <Button className="btn bgc-primary" onClick={handlePageMove}>
              <span className="txt">목록</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
