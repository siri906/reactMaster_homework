import CategoryList from "@/components/CategoryList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "카테고리 목록",
};

export default function Home() {
  return (
    <div>
      <CategoryList />
    </div>
  );
}
