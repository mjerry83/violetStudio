import React from "react";
import { useNavigate } from "react-router-dom";

import IntroSection from "../../common/Intro";
import Section01 from "../../common/Section01";
import Section02 from "../../common/Section02";
import Section06 from "../../common/Section06";
import Section05 from "../../common/Section05";

import 이원희_나를이루는것들 from "../images/5주차 작품/이원희_5주차.PNG";
import 이원희_좋아하는장소 from "../images/7주차 작품/이원희-작품.mp4";

const WonheeWorldPage = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/student");
  };

  const title = "";
  const statement = "";

  const sec01Title = "나를 이루는 것들: 내가 좋아하는 것";
  const sec01Text =
    "배경은 좋아하는 하늘을 넣었다. \n 이미지는 강아지와 일러스트, 그리고 나의 그림 그리는 모습을 넣었고, \n 테두리를 밝게 표현하기 위해 노란색으로 표현했다. \n 수채화 표현처럼 번지게 하였다.";

  const sec02Title = "그곳에서의 나: 좋아하는 공간 - 학교 선생님";
  const sec02Text =
    "이 공간은 내가 좋아하는 장소 중 하나인 학교의 개별학습반이다. \n 이곳을 떠올리면 3학년 담임 선생님이 떠오른다. \n 그래서 도영상을 만들어 표현해보았다. \n (*음원출처: 악동뮤지션 - Love Lee)";

  return (
    <div>
      {/* ------------------------ 인트로 섹션 ------------------------ */}
      <IntroSection
        introColor="#B5DDF7"
        introImage=""
        title={title}
        statement={statement}
      />

      <Section02
        title={sec01Title}
        image={이원희_나를이루는것들}
        text={sec01Text}
      />

      <Section06
        title={sec02Title}
        video={이원희_좋아하는장소}
        text={sec02Text}
      />
    </div>
  );
};

export default WonheeWorldPage;
