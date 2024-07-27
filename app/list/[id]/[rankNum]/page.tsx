import BookList from "@/components/BookList";
import { getBookList } from "@/service/api";
import { BookGroup, BookListInfo } from "@/types/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "책 상세",
};

export default async function Detail({ params: { rankNum = "1", id } }: { params: { id: string; rankNum: string } }) {
  const bookList: BookListInfo = await getBookList(id);
  const bookInfoList: BookGroup[] = bookList.results.books;
  const viewBookInfo = bookInfoList[Number(rankNum) - 1] ?? [];
  return (
    <>
      <BookList id={id} bookInfoList={bookInfoList} viewBookInfo={viewBookInfo} rankNum={rankNum} />
    </>
  );
}
