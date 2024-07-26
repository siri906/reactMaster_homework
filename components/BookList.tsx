import { getBookList } from "@/service/api";
import { BookGroup, BookListInfo } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import BookTab from "./BookTab";

interface Props {
  id: string;
  rankNum?: string;
}

export default async function BookList({ id, rankNum = "1" }: Props) {
  const bookList: BookListInfo = await getBookList(id);
  const bookInfoList: BookGroup[] = bookList.results.books;
  const viewBookInfo = bookInfoList[Number(rankNum) - 1];

  return (
    <div>
      <div className="wrap_book ">
        <div className="bx_book flex w-full my-0 mx-auto max-w-3xl justify-between bg-orange-200 p-10 rounded-3xl mb-8">
          <div className="left_area">
            <div>
              {viewBookInfo.book_image ? <Image src={`${viewBookInfo.book_image}`} alt={`${viewBookInfo.title}`} width={viewBookInfo.book_image_width} height={viewBookInfo.book_image_height} /> : <div style={{ width: "300px", height: "500px" }}>no Image</div>}

              <span>{viewBookInfo.rank} 위</span>
            </div>
            <ul className="list_buy">
              {viewBookInfo.buy_links.slice(0, 3).map((buyLink, idx) => (
                <li key={idx}>
                  <Link href={`${buyLink.url}`}>{buyLink.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="right_area text-left">
            <p>{bookList.results.display_name}</p>
            <h2>{viewBookInfo.title}</h2>
            <h3>
              {viewBookInfo.author}
              <br /> {viewBookInfo.contributor}
            </h3>
          </div>
        </div>
        <BookTab bookInfoList={bookInfoList} id={id} rankNum={rankNum} />
      </div>
    </div>
  );
}
