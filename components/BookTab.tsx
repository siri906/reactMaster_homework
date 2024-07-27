"use client";

import { BookGroup } from "@/types/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";

interface Props {
  bookInfoList: BookGroup[];
  id: string;
  rankNum: string;
}

const TabBook = styled(motion.div)`
  max-width: 1280px;
  margin: 0 auto;
`;
const TabBookItem = styled(motion.li)``;

export default function BookTab({ bookInfoList, id, rankNum }: Props) {
  const router = useRouter();

  const tabItemClick = (bookItem: BookGroup) => {
    router.push(`/list/${id}/${bookItem.rank}`);
  };
  return (
    <TabBook>
      <ul className="flex gap-3">
        {bookInfoList?.map((bookItem: BookGroup, idx: number) => {
          return (
            <TabBookItem key={idx} layoutId={rankNum} className="hover:cursor-pointer hover:scale-110 hover:transition-transform">
              <div className={Number(rankNum) === bookItem.rank ? " ring-4 ring-emerald-400" : ""} onClick={() => tabItemClick(bookItem)}>
                <Image src={`${bookItem.book_image}`} priority={true} width={200} height={350} alt={bookItem.title} />
                <p className="text-center">{bookItem.rank} 위</p>
              </div>
            </TabBookItem>
          );
        })}
      </ul>
    </TabBook>
  );
}
