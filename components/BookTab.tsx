"use client";

import { BookGroup } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  bookInfoList: BookGroup[];
  id: string;
  rankNum: string;
}

export default function BookTab({ bookInfoList, id, rankNum }: Props) {
  return (
    <div className="tab_book max-w-screen-xl my-0 mx-auto">
      <ul className="flex gap-3">
        {bookInfoList.map((bookItem: BookGroup, idx: number) => {
          return (
            <li key={idx}>
              <div className={Number(rankNum) === bookItem.rank ? " ring-4 ring-emerald-400" : ""}>
                <Link href={`/list/${id}/${bookItem.rank}`}>
                  <Image src={`${bookItem.book_image}`} priority={false} width={300} height={500} alt={bookItem.title} />
                </Link>
              </div>
              <p>{bookItem.rank} 위</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
