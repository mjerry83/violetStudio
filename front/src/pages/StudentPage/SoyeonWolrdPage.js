import React from "react";
import { useNavigate } from "react-router-dom";

import IntroSection from "../../common/Intro";
import Section01 from "../../common/Section01";
import Section02 from "../../common/Section02";
import Section04 from "../../common/Section04";
import Section05 from "../../common/Section05";

import 안소연표지 from "../images/표지/안소연-표지.png";
import 안소연_나를이루는것들 from "../images/5주차 작품/안소연_5주차.png";
import 안소연_나그리고너 from "../images/6주차 작품/GIF작품/안소연(1).GIF";
import 안소연_좋아하는공간 from "../images/7주차 작품/안소연 7주차 (2).gif";
import 안소연_가고싶은공간 from "../images/7주차 작품/안소연 7주차 (3).gif";
import 안소연_싫어하는공간 from "../images/7주차 작품/안소연 7주차 (1).gif";

const SoyeonWorldPage = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/student");
  };

  const title = "자유";
  const statement =
    "좋아하는 것은 <기록>, \n 그리고 소중한 기억들입니다. \n 소중한 기억들을 잘 정리하여 예쁘게 보여주고 싶습니다.";

  const sec01Title = "나를 이루는 것들: 나만의 세상";
  const sec01Text =
    "앵무새를 많이 좋아해요. 대부분의 동물을 다 좋아합니다. \n 좋아하는 게임은 '원신', '붕괴:스타레일'입니다. \n 애니메이션을 보는 것도 좋아해요.";

  const sec02Title = "나, 그리고 너: 친구들과의 추억";
  const sec02Text = "또 뚝섬에서, \n 다 함께 뚝섬에서 놀고 싶다!";

  const sec03Title = "그곳에서의 나: 내가 좋아하는 공간";
  const sec03Text =
    "카페에 가서 음료를 마시면 기분이 좋아져요. \n 마음이 편하고 시원한 것을 마시면 선선한 기분이 듭니다.";

  const sec04Title = "그곳에서의 나: 가고싶은 공간";
  const sec04_1Text = "일본에 가게 된다면 \n 먹고싶은 게 많아요.";
  const sec04_2Text =
    "푸딩, 파르페, 녹차 아이스크림, \n 그리고 물방울 떡 등이 있답니다.";

  const sec05Title = "그곳에서의 나: 내가 싫어하는 공간";
  const sec05Text =
    "가끔 작은 소리에도 놀라기는 하지만, \n 큰 소리는 정말로 싫어요!";

  return (
    <div>
      {/* ------------------------ 인트로 섹션 ------------------------ */}
      <IntroSection
        introColor="#B5DDF7"
        introImage={안소연표지}
        title={title}
        statement={statement}
      />

      {/* ------------------------ 섹션 01 ------------------------ */}
      <Section01
        title={sec01Title}
        image={안소연_나를이루는것들}
        text={sec01Text}
      />

      {/* ------------------------ 섹션 02 ------------------------ */}
      <Section04
        title={sec02Title}
        image={안소연_나그리고너}
        text={sec02Text}
      />

      {/* ------------------------ 섹션 03 ------------------------ */}
      <Section02
        title={sec03Title}
        image={안소연_좋아하는공간}
        text={sec03Text}
      />

      {/* ------------------------ 섹션 04 ------------------------ */}
      <Section05
        title={sec04Title}
        image={안소연_가고싶은공간}
        text01={sec04_1Text}
        text02={sec04_2Text}
      />

      {/* ------------------------ 섹션 05 ------------------------ */}
      <Section01
        title={sec05Title}
        image={안소연_싫어하는공간}
        text={sec05Text}
      />
    </div>
  );
};

export default SoyeonWorldPage;
