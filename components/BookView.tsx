import { BookGroup, BookListInfo } from "@/types/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  viewBookInfo: BookGroup;
  rankNum: string;
}

const BxBook = styled(motion.div)``;

export default function BookView({ viewBookInfo, rankNum }: Props) {
  return (
    <BxBook className="bx_cont">
      <div className="left_area relative min-w-80">
        <div className="mb-5">
          {viewBookInfo.book_image ? <Image src={`${viewBookInfo.book_image}`} alt={`${viewBookInfo.title}`} width={viewBookInfo.book_image_width} height={viewBookInfo.book_image_height} /> : <div style={{ width: "300px", height: "500px" }}>no Image</div>}
          <span className="absolute -top-6 -left-6 bg-orange-500 size-20 rounded-full text-white text-xl flex items-center justify-center">{viewBookInfo.rank}위</span>
        </div>
        <div>
          <h2 className="text-xl">Buy Site</h2>
          <ul className="list_buy flex gap-2 mt-5">
            {viewBookInfo.buy_links.slice(0, 3).map((buyLink, idx) => (
              <li key={idx} className="bg-orange-400 text-white py-1 px-2 rounded-full hover:bg-orange-500 hover:scale-95 hover:transition-transform">
                <Link href={`${buyLink.url}`}>{buyLink.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right_area text-left flex flex-col items-center justify-center">
        <h2 className="text-lg">{viewBookInfo.title}</h2>
        <div className="w-full h-px bg-orange-600 my-10" />
        <h3>
          {viewBookInfo.author}
          <br /> {viewBookInfo.contributor}
        </h3>
      </div>
    </BxBook>
  );
}
