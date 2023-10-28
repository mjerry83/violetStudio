import React from "react";
import { useNavigate } from "react-router-dom";

import IntroSection from "../../common/Intro";
import Section01 from "../../common/Section01";
import Section02 from "../../common/Section02";
import Section04 from "../../common/Section04";
import Section05 from "../../common/Section05";

import 김혜선_나를이루는것들 from "../images/5주차 작품/김혜선_5주차.PNG";
import 김혜선_나그리고너 from "../images/6주차 작품/GIF작품/김혜선(1).GIF";

const HyaeSunWorldPage = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/student");
  };

  const title = "제목을 입력해볼까요?";
  const statement =
    "설명도 입력해 봅시다! \n 설명도 입력해 봅시다! \n 설명도 입력해 봅시다!";

  const sec01Title = "";
  const sec01Text = "";

  const sec02Title = "";
  const sec02_1Text = "";
  const sec02_2Text = "";

  return (
    <div>
      {/* ------------------------ 인트로 섹션 ------------------------ */}
      <IntroSection
        introColor="#B5DDF7"
        introImage=""
        title={title}
        statement={statement}
      />

      {/* ------------------------ 섹션 01 ------------------------ */}
      <Section02
        title={sec01Title}
        image={김혜선_나를이루는것들}
        text={sec01Text}
      />

      {/* ------------------------ 섹션 02 ------------------------ */}
      <Section05
        title={sec02Title}
        image={김혜선_나그리고너}
        text01={sec02_1Text}
        text02={sec02_2Text}
      />
    </div>
  );
};

export default HyaeSunWorldPage;
