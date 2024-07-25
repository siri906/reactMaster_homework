import { getBookList } from "@/service/api";
import { BookListInfo } from "@/types/types";

interface Props {
  id: string;
}

export default async function BookList({ id }: Props) {
  const bookList: BookListInfo = await getBookList(id);
  console.log(bookList, "booklist");
  return <div>test</div>;
}
