import { useQuery } from "@tanstack/react-query";
import { getMovieDetail } from "../api";

export default function useQueryMovieDetail(movieId: string) {
  return useQuery({
    queryKey: ["movieDetail", movieId],
    queryFn: () => getMovieDetail(movieId),
  });
}
