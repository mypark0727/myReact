"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { LnbList } from "@/services/lnb/LnbList";

export default function Lnb(props) {
  const router = useRouter();

  // 현재 노출될 lnb리스트 데이터
  const [lnbListData, setLnbListData] = useState();

  useEffect(() => {
    setLnbData(props.gnbStatus);
  }, [props]);

  // 전체 lnb리스트에서 프롭스로 받은 매개변수를 전달하여 lnb리스트 필터링
  function setLnbData(value) {
    setLnbListData(LnbList[value]);
  }

  // lnb Item 클릭 메서드
  function onClickLnbItem(list, parentList) {
    if (list.children?.length > 0) {
      console.log(`TreeItem expanded: `);
    } else {
      console.log(`TreeItem clicked: `);

      // 1뎁스아이템이면 child:X므로 open:X, 2뎁스아이템이면 child:O, open:O
      list.depth === "1"
        ? props.setExpandedItems([])
        : props.setExpandedItems([parentList.id]);
      router.push(list.route); // 라우터이동
    }
  }

  // lnb 1개만 열리게 하는 핸들러
  function handleToggleItem(event, itemId) {
    props.setExpandedItems([itemId]);
  }

  // lnb 아이템 선택 핸들러
  function handleSelectedItemsChange(e, ids) {
    props.setSelectedLnbItems(ids);
  }

  // lnb expanded 핸들러
  function handleExpandedItemsChange(e, ids) {
    props.setExpandedItems(ids);
  }

  return (
    <div className={`lnb-wrap ${props.className}`}>
      <SimpleTreeView
        className="lnb-area"
        onItemExpansionToggle={handleToggleItem}
        selectedItems={props.selectedLnbItems}
        onSelectedItemsChange={handleSelectedItemsChange}
        expandedItems={props.expandedItems}
        onExpandedItemsChange={handleExpandedItemsChange}
      >
        {lnbListData?.map((list) => {
          return (
            <TreeItem
              className="depth1"
              itemId={list.id}
              label={list.label}
              key={list.id}
              onClick={() => {
                onClickLnbItem(list);
              }}
            >
              {list.children?.map((child) => (
                <TreeItem
                  className="depth2"
                  itemId={child.id}
                  label={child.label}
                  key={child.id}
                  onClick={() => {
                    onClickLnbItem(child, list);
                  }}
                />
              ))}
            </TreeItem>
          );
        })}
      </SimpleTreeView>
    </div>
  );
}
