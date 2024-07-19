import styled from "styled-components";
import useQueryMovies from "../service/query/useQueryMovies";
import { MovieDataInfo } from "../types/movieType";
import { AnimatePresence, motion } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import { useState } from "react";

type Props = {
  path: string;
};

const Loader = styled.div`
  display: flex;
  height: 20vh;
  justify-content: center;
  align-items: center;
`;

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
const Dimmed = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;
const MovieDetail = styled(motion.div)`
  position: fixed;
  top: 5%;
  left: 35%;
  width: 450px;
  height: 700px;
  background-color: #fff;
  border-radius: 20px;
  z-index: 10;
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
  show: { scale: 1, opacity: 1, y: 0, x: 0 },
};

export default function MovieList({ path }: Props) {
  const bigMovieMatch = useMatch(path !== "popular" ? `/${path}/:movieId` : `/:movieId`);
  console.log(bigMovieMatch, "bigMovieMatch");
  const navigate = useNavigate();

  const { data, isLoading, isSuccess } = useQueryMovies(path);
  const moviesData: MovieDataInfo = isSuccess ? data : [];
  const movieItemClick = (movieId: number) => {
    navigate(path !== "popular" ? `/${path}/${movieId}` : `/${movieId}`);
  };
  const onClickDimmed = () => {
    navigate(path !== "popular" ? `/${path}` : `/`);
  };
  return (
    <>
      {isLoading ? (
        <Loader>Loading</Loader>
      ) : (
        <MovieListWrapper>
          <MovieListUl variants={movieListContainerAni} initial="hide" animate="show">
            {moviesData?.results?.map((movieItem) => {
              return (
                <MovieListItem key={movieItem.id} variants={movieListItemAni} onClick={() => movieItemClick(movieItem.id)} layoutId={movieItem.id + ""}>
                  <PosterImg whileHover={{ scale: 1.1 }} $bgPhoto={makeImagePath(movieItem.poster_path)} />
                  <Title>{movieItem.title}</Title>
                </MovieListItem>
              );
            })}
          </MovieListUl>
          <AnimatePresence>
            {bigMovieMatch !== null ? (
              <>
                <Dimmed onClick={onClickDimmed} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                <MovieDetail layoutId={bigMovieMatch?.params.movieId + ""}>test</MovieDetail>
              </>
            ) : null}
          </AnimatePresence>
        </MovieListWrapper>
      )}
    </>
  );
}
