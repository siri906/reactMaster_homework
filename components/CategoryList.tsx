import { getBookCategoryList } from "@/service/api";
import { BookCategoryList, BookCategoryListDetail } from "@/types/types";
import { Metadata } from "next";

import Link from "next/link";

export default async function CategoryList() {
  const bookCategoryList: BookCategoryList = await getBookCategoryList();

  return (
    <div className="my-0 mx-auto max-w-screen-lg">
      <ul className="cateList">
        {bookCategoryList.results.map((categoryItem: BookCategoryListDetail, idx: number) => (
          <li key={idx} className="my-2">
            <Link className="bg-emerald-500 rounded-3xl py-2 px-4 text-sm mr-2 inline-block text-white hover:bg-emerald-700 hover:scale-90 transition-transform" href={`/list/${categoryItem.list_name_encoded}`}>
              {categoryItem.display_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
