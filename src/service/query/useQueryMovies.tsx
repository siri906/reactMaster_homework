import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../api";

const useQueryMovies = (path: string) => {
  return useQuery({
    queryKey: ["movies", path],
    queryFn: () => getMovies(path),
  });
};

export default useQueryMovies;
