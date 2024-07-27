"use client";

import { BookGroup } from "@/types/types";
import BookTab from "./BookTab";
import BookView from "./BookView";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

interface Props {
  id: string;
  rankNum?: string;
  bookInfoList: BookGroup[];
  viewBookInfo: BookGroup;
}

export default function BookList({ id, rankNum = "1", bookInfoList, viewBookInfo }: Props) {
  return (
    <div>
      <div className="wrap_book ">
        <BookView viewBookInfo={viewBookInfo} rankNum={rankNum} />
        <BookTab bookInfoList={bookInfoList} id={id} rankNum={rankNum} />
      </div>
    </div>
  );
}
