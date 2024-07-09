import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { countryState, ICountry } from "./atom";
import { MouseEventHandler, ReactElement } from "react";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 380px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  text-align: left;
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  input {
    width: 100%;
    border-radius: 10px;
    padding: 15px;
    background: #1f2d3b;
    border: 0;
    color: #fff;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .btn {
    width: 100%;
    text-align: center;
    border-radius: 10px;
    padding: 10px 0;
    background: #131c24;
    border: 0;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
`;

interface IFormData {
  [key: string]: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormData>();
  const [countryInfo, setCountryInfo] = useRecoilState(countryState);
  const onSubmit = (data: IFormData) => {
    setCountryInfo((prev) => [{ text: data.country, id: Date.now(), category: "stay" }, ...prev]);
  };

  const onClickFn = (event: React.MouseEvent<HTMLButtonElement>, item: ICountry) => {
    const {
      currentTarget: { name },
    } = event;

    if (name === "del") {
      const newList = countryInfo.filter((country) => country.id !== item.id);
      setCountryInfo(newList);
    } else if (name === "ok") {
      // const newObj = {
      //   id: item.id,
      //   text: item.text,
      //   category: "Go",
      // };
      //넌.. 왜 안돼?
      // setCountryInfo((prev) => [ newObj , ...prev]);
      setCountryInfo((prev) => [{ text: item.text, id: item.id, category: "Go" }]);
    }
  };

  console.log(countryInfo, "countryInfo");
  return (
    <Box>
      <h1>내가 가고 싶은 나라들</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              placeholder="나라 이름"
              {...register("country", {
                required: {
                  value: true,
                  message: "나라이름 꼭 적어줘!",
                },
              })}
            />
            <p>{errors.country?.message}</p>
          </div>
          <button className="btn">가자!</button>
        </form>
      </div>
      <div>
        <h2>입력한 나라</h2>
        {countryInfo
          .filter((item) => item.category === "stay")
          .map((item, idx) => {
            return (
              <div key={idx}>
                {item.text}
                {item.category === "stay" && (
                  <>
                    <button name="ok" onClick={(event) => onClickFn(event, item)}>
                      ok
                    </button>
                    <button name="del" onClick={(event) => onClickFn(event, item)}>
                      삭제
                    </button>
                  </>
                )}

                {item.category === "Go" && (
                  <>
                    <button name="like" onClick={(event) => onClickFn(event, item)}>
                      go 좋아하는 나라
                    </button>
                    <button name="back" onClick={(event) => onClickFn(event, item)}>
                      go 입력한 나라
                    </button>
                  </>
                )}

                {item.category === "Like" && (
                  <>
                    <button name="back_done" onClick={(event) => onClickFn(event, item)}>
                      go 가본 나라
                    </button>
                  </>
                )}
              </div>
            );
          })}
      </div>
      <div>
        <h2>내가 가본 나라들</h2>
        {countryInfo
          .filter((item) => item.category === "Go")
          .map((item, idx) => {
            return (
              <div key={idx}>
                {item.text}
                {item.category === "stay" && (
                  <>
                    <button name="ok" onClick={(event) => onClickFn(event, item)}>
                      ok
                    </button>
                    <button name="del" onClick={(event) => onClickFn(event, item)}>
                      삭제
                    </button>
                  </>
                )}

                {item.category === "Go" && (
                  <>
                    <button name="like" onClick={(event) => onClickFn(event, item)}>
                      go 좋아하는 나라
                    </button>
                    <button name="back" onClick={(event) => onClickFn(event, item)}>
                      go 입력한 나라
                    </button>
                  </>
                )}

                {item.category === "Like" && (
                  <>
                    <button name="back_done" onClick={(event) => onClickFn(event, item)}>
                      go 가본 나라
                    </button>
                  </>
                )}
              </div>
            );
          })}
      </div>
      <div>
        <h2>내가 좋아하는 나라들</h2>
        {countryInfo
          .filter((item) => item.category === "Like")
          .map((item, idx) => {
            return (
              <div key={idx}>
                {item.text}
                {item.category === "stay" && (
                  <>
                    <button name="ok" onClick={(event) => onClickFn(event, item)}>
                      ok
                    </button>
                    <button name="del" onClick={(event) => onClickFn(event, item)}>
                      삭제
                    </button>
                  </>
                )}

                {item.category === "Go" && (
                  <>
                    <button name="like" onClick={(event) => onClickFn(event, item)}>
                      go 좋아하는 나라
                    </button>
                    <button name="back" onClick={(event) => onClickFn(event, item)}>
                      go 입력한 나라
                    </button>
                  </>
                )}

                {item.category === "Like" && (
                  <>
                    <button name="back_done" onClick={(event) => onClickFn(event, item)}>
                      go 가본 나라
                    </button>
                  </>
                )}
              </div>
            );
          })}
      </div>
    </Box>
  );
}
