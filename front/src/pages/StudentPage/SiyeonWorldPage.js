import React from "react";
import { useNavigate } from "react-router-dom";

import IntroSection from "../../common/Intro";
import Section01 from "../../common/Section01";
import Section02 from "../../common/Section02";
import Section04 from "../../common/Section04";
import Section05 from "../../common/Section05";

import 문시연표지 from "../images/표지/문시연-표지.png";
import 문시연_나그리고너 from "../images/6주차 작품/GIF작품/문시연(1).GIF";
import 문시연_좋아하는공간 from "../images/7주차 작품/문시연 7주차 (3).jpg";
import 문시연_싫어하는공간 from "../images/7주차 작품/문시연 7주차 (1).jpg";
import 문시연_가고싶은공간 from "../images/7주차 작품/문시연 7주차 (2).jpg";

const SiyeonWorldPage = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/student");
  };

  const title = "사이트 제목을 정해볼까요?";
  const statement = "사이트 내용을 넣어봅시다! \n 사이트 내용을 넣어봅시다! \n";

  const sec01Title = "";
  const sec01Text = "";

  const sec02Title = "";
  const sec02Text = "";

  const sec03Title = "";
  const sec03Text = "";

  const sec04Title = "";
  const sec04Text = "";

  return (
    <div>
      {/* ------------------------ 인트로 섹션 ------------------------ */}
      <IntroSection
        introColor="#FF598B"
        introImage={문시연표지}
        title={title}
        statement={statement}
      />

      {/* ------------------------ 섹션 01 ------------------------ */}
      <Section02
        title={sec01Title}
        image={문시연_나그리고너}
        text={sec01Text}
      />

      {/* ------------------------ 섹션 02 ------------------------ */}
      <Section01
        title={sec02Title}
        image={문시연_좋아하는공간}
        text={sec02Text}
      />

      {/* ------------------------ 섹션 03 ------------------------ */}
      <Section02
        title={sec03Title}
        image={문시연_가고싶은공간}
        text={sec03Text}
      />

      {/* ------------------------ 섹션 04 ------------------------ */}
      <Section01
        title={sec04Title}
        image={문시연_싫어하는공간}
        text={sec04Text}
      />
    </div>
  );
};

export default SiyeonWorldPage;
