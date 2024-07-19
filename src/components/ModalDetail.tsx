import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MovieDetailData } from "../types/movieType";
import useQueryMovieDetail from "../service/query/useQueryMovieDetail";
import { makeImagePath } from "./MovieList";

const Dimmed = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;
const MovieDetail = styled(motion.div)<{ $bgDetail: string }>`
  display: flex;
  align-items: flex-end;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 450px;
  height: 650px;
  background: linear-gradient(to bottom, rgba(25, 25, 25, 0) 10%, rgba(25, 25, 25, 0.5) 25%, rgba(25, 25, 25, 0.7) 40%, rgba(25, 25, 25, 1) 50%, rgba(25, 25, 25, 1) 75%, rgba(25, 25, 25, 1) 100%), url(${(props) => props.$bgDetail}) center center;
  background-repeat: no-repeat;
  border-radius: 20px;
  z-index: 10;
  background-size: cover;
  background-blend-mode: multiply;
`;
const InfoArea = styled.div`
  padding: 20px;
`;
const TitleSub = styled.h5`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const Desc = styled.p`
  font-weight: 600;
  margin-bottom: 10px;
`;
const ListInfo = styled.ul``;
const ListInfoItem = styled.li`
  font-weight: 400;
  & + li {
    margin-top: 5px;
  }
  word-break: break-all;
`;

const BtnClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  z-index: 10;
`;

type Props = {
  path: string;
  movieId: string;
};

export default function ModalDetail({ path, movieId }: Props) {
  const navigate = useNavigate();
  const onClickClose = () => navigate(path !== "popular" ? `/${path}` : `/`);
  const { data, isSuccess } = useQueryMovieDetail(movieId);
  const movieDetailInfo: MovieDetailData = isSuccess ? data : "";

  const formatCurrency = (amount: number) => {
    return amount?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };
  return (
    <>
      <Dimmed onClick={onClickClose} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
      <MovieDetail layoutId={movieId} initial={{ translate: "-50% -50%" }} $bgDetail={makeImagePath(movieDetailInfo.backdrop_path)}>
        <BtnClose className="btn_close" onClick={onClickClose}>
          <svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path clipRule="evenodd" fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z" />
          </svg>
        </BtnClose>
        <InfoArea>
          <div className="wrap_desc">
            <TitleSub>{movieDetailInfo.original_title}</TitleSub>
            <Desc className="desc">{movieDetailInfo.overview}</Desc>
            <ListInfo>
              <ListInfoItem>Budget: {formatCurrency(movieDetailInfo.budget) ?? ""}</ListInfoItem>
              <ListInfoItem>Revenue: {formatCurrency(movieDetailInfo.revenue) ?? ""}</ListInfoItem>
              <ListInfoItem>RunTiem: {movieDetailInfo.runtime ?? ""}</ListInfoItem>
              <ListInfoItem>Rating: {movieDetailInfo.vote_average ?? ""}</ListInfoItem>
              {movieDetailInfo.homepage && (
                <ListInfoItem>
                  HomePage: <Link to={movieDetailInfo.homepage ?? ""}>{movieDetailInfo.homepage ?? ""}</Link>
                </ListInfoItem>
              )}
            </ListInfo>
          </div>
        </InfoArea>
      </MovieDetail>
    </>
  );
}
