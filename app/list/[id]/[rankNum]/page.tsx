import BookList from "@/components/BookList";

export default function Detail({ params: { rankNum, id } }: { params: { id: string; rankNum: string } }) {
  return (
    <>
      <BookList id={id} rankNum={rankNum} />
    </>
  );
}
