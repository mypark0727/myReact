"use client";

import { useEffect, useState, useRef } from "react";

import apiChatbot from "@/api/chatbot/apiChatbot";

export default function Page() {
  const [apiData, setApiData] = useState(null);
  const [loadStatus, setLoadStatus] = useState(false);

  const [getKeyword, setKeyword] = useState('');
  const [getResultData, setResultData] = useState(null);

  const resultDomRef = useRef(null); // Ref로 DOM 요소를 참조

  useEffect(() => {
    init();
  }, []);

  function init(){
    console.log('초기화');
  }

  function enterKeyword (e) {
    if (e.key === 'Enter') {
      fetchChatbotData(getKeyword);
      setKeyword('');
    }
  }

  // 함수: 키워드가 포함된 데이터를 가져오기
  function fetchChatbotData(inputText) {
    const matchedData = apiChatbot.filter((item) =>
      inputText.includes(item.keyword)
    );

    if (matchedData.length > 0) {
      setResultData(matchedData[0]);
      addResultToDOM(matchedData[0]);
    } else {
      console.log('nodata');
      setResultData(null);
      alert("검색결과없음");
    }
  }

  // 돔에 동적생성으로 컴포넌트 추가
  function addResultToDOM (data) {
    console.log(data);
    if (resultDomRef.current) {
      const resultDiv = createResultDom(); // 결과 담을 div 생성

      data.resultList.forEach((list) => {
        let content;
        if (list.type === 'text') {
          content = createTextBox(list.result); // 텍스트 박스 생성
        } else if (list.type === 'video') {
          content = createVideoBox(list.srcUrl); // 비디오 박스 생성
        }

        if (content) {
          resultDiv.appendChild(content); // 생성된 내용을 결과 div에 추가
        }
      });
      resultDomRef.current.appendChild(resultDiv); // 결과를 DOM에 추가
      resultDomRef.current.scrollTop = resultDomRef.current.scrollHeight; // 스크롤을 최하단으로 이동
    }
  }


  function createResultDom(){
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result-box'; 
    return resultDiv;
  }

  function createTextBox(text){
    const textBox = document.createElement('div');
    textBox.className = 'txt'; // 클래스 추가 (필요에 따라 스타일링)
    textBox.innerText = text;
    return textBox;
  }

  function createVideoBox(srcUrl){
    const videoBox = document.createElement('div');
    videoBox.className = 'com-chatbot-source'; // 클래스 추가 (필요에 따라 스타일링)

    const frame = document.createElement('iframe');
    frame.src = srcUrl;
    videoBox.appendChild(frame);
    return videoBox;
  }

  return (
    <div className="page-wrap">
      <div className="page-header">
        <h2>챗봇 : [유미 , 암베사] 입력하세요 </h2>
      </div>
      <div className="page-container">

        {/* 챗봇 */}
        <div className="chatbot-wrap">
          {/* 결과 동적생성 위치 */}
          <div className="chatbot-body" ref={resultDomRef} >
          </div>
          
          <div className="chatbot-input">
            <input 
            type="text" 
            placeholder="검색어 입력" 
            value={getKeyword}
            onChange={(e)=> setKeyword(e.target.value)} 
            onKeyDown={enterKeyword} 
            />
          </div>
        </div>

      </div>
    </div>
  );
}
