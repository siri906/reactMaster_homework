import { getBookList } from "@/service/api";
import { BookGroup, BookListInfo } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
}

export default async function BookList({ id }: Props) {
  const bookList: BookListInfo = await getBookList(id);
  const bookInfoList: BookGroup[] = bookList.results.books;
  return (
    <div>
      <div className="wrap_book w-full max-w-5xl my-0 mx-auto">
        <div className="bx_book flex flex-wrap bg-orange-200 ">
          <div className="left_area">
            <Link href={"/"}>
              <Image src={""} width={300} height={500} alt="test" />
              <span>위</span>
            </Link>
            <ul className="list_buy">
              <li>
                <Link href={"/"}>아마존</Link>
              </li>
              <li>
                <Link href={"/"}>애플 북</Link>
              </li>
              <li>
                <Link href={"/"}>북샵</Link>
              </li>
            </ul>
          </div>
          <div className="right_area">
            <p>카테고리 : </p>
            <h2>제목</h2>
            <h3> 저자 | 출판</h3>
          </div>
        </div>
        <div className="tab_book">
          <ul className="flex">
            {bookInfoList.map((bookItem: BookGroup, idx: number) => {
              return (
                <li key={idx}>
                  <Link href={""}>
                    <Image src={`${bookItem.book_image}`} width={300} height={500} alt="test" />
                    <p> 위</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
