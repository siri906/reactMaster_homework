export const API_URL = "https://books-api.nomadcoders.workers.dev/list";

export const getBookCategoryList = async () => {
  const data = fetch(`${API_URL}s`).then((resultData) => resultData.json());
  return data;
};

export const getBookList = async (id: string) => {
  const data = fetch(`${API_URL}?name=${id}`).then((resultData) => resultData.json());
  return data;
};
