import styled from "styled-components";
import useQueryMovies from "../service/query/useQueryMovies";
import { MovieDataInfo } from "../types/movieType";
import { motion } from "framer-motion";

type Props = {
  path: string;
};

const MovieListWrapper = styled.div``;
const MovieListUl = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  max-width: 720px;
  margin: 0 auto;
`;
const MovieListItem = styled(motion.li)`
  flex: 1 1 30%;
  text-align: center;
  padding: 20px;
`;
const PosterImg = styled(motion.div)<{ $bgPhoto: string }>`
  background: url(${(props) => props.$bgPhoto}) #fff no-repeat;
  background-size: cover;
  height: 300px;
  border-radius: 20px;
  transform-origin: bottom center;
  cursor: pointer;
`;
const Title = styled.h4`
  font-weight: 700;
  margin-top: 10px;
`;

const makeImagePath = (id: string, format?: string) => `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
const movieListContainerAni = {
  hide: {},
  show: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const movieListItemAni = {
  hide: { scale: 0, opacity: 0, y: 20 },
  show: { scale: 1, opacity: 1, y: 0 },
};

export default function MovieList({ path }: Props) {
  const { data, isLoading, isSuccess } = useQueryMovies(path);
  const moviesData: MovieDataInfo = isSuccess ? data : [];

  return (
    <MovieListWrapper>
      <MovieListUl variants={movieListContainerAni} initial="hide" animate="show">
        {moviesData?.results?.map((movieItem) => {
          return (
            <MovieListItem variants={movieListItemAni}>
              <PosterImg whileHover={{ scale: 1.1 }} $bgPhoto={makeImagePath(movieItem.poster_path)} />
              <Title>{movieItem.title}</Title>
            </MovieListItem>
          );
        })}
      </MovieListUl>
    </MovieListWrapper>
  );
}
