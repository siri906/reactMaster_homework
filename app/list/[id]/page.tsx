import BookList from "@/components/BookList";

export default function Detail({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <BookList id={id} />
    </>
  );
}
