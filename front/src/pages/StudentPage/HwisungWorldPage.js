import React from "react";
import styled from "styled-components";

import IntroSection from "../../common/Intro";
import Section01 from "../../common/Section01";
import Section02 from "../../common/Section02";
import Section03 from "../../common/Section03";
import Section04 from "../../common/Section04";

import 강휘성표지 from "../images/표지/강휘성-표지.png";
import 강휘성_나를이루는것들1 from "../images/5주차 작품/강휘성_5주차 (1).png";
import 강휘성_나를이루는것들2 from "../images/5주차 작품/강휘성_5주차 (2).png";
import 강휘성_좋아하는공간 from "../images/7주차 작품/강휘성 7주차-1.gif";
import 강휘성_빠른기차고든 from "../images/7주차 작품/강휘성 7주차-3.gif";
import 강휘성_가고싶은공간 from "../images/7주차 작품/강휘성 7주차-4.gif";
import 강휘성_나그리고너 from "../images/6주차 작품/GIF작품/강휘성(1).gif";

import 강휘성_오브젝트1 from "../images/표지/강후성-장식-3.png";

const title = "나의 월드";
const statement =
  "이 세상에는 제임스, 마이크, 토마스, 고든, \n 그리고 설리반이 있습니다. \n 그리고 엄마, 아빠, 휘성이도 있어요. \n 나의 월드 속에서는 기분이 좋습니다.";

const sec01Title = "나를 이루는 것들: 내가 좋아하는 것";
const sec01Text =
  "고든하고 토마스, <몬스터 주식회사>, \n 그리고 <벅스라이프>입니다.\n 내가 좋아하는 영웅들입니다.";
const sec01Text_2 =
  "친구도 구해주고, 좋은 꿈을 꾸게 되었습니다. \n 친구들도 만날 수 있습니다.";

const sec02Title = "그곳에서의 나: 내가 좋아하는 공간";
const sec02Text = "내가 좋아하는 공간, 침대에서 자는 게 좋아요.";

const sec04Title = "그곳에서의 나: 내가 가고싶은 공간";
const sec04Text = "내가 가고싶은 공간, 오락실의 레이싱 게임이 재미있다.";

const sec05Title = "나 그리고 너: 가족들과의 산책";
const sec05Text =
  "엄마, 아빠와 함께 저녁에 한강으로 산책을 갔어요. \n 달구경을 하고, \n 운동을 하고, \n 흐르는 물도 봤어요.";

const HwisungWorldPage = () => {
  return (
    <div>
      {/* ------------------------ 인트로 섹션 ------------------------ */}
      <IntroSection
        introColor="#3E3BFF"
        introImage={강휘성표지}
        title={title}
        statement={statement}
      />

      {/* ------------------------ 섹션 01 ------------------------ */}
      <Section02
        title={sec01Title}
        image={강휘성_나를이루는것들1}
        text={sec01Text}
      />
      <Section01 image={강휘성_나를이루는것들2} text={sec01Text_2} />

      {/* ------------------------ 섹션 02 ------------------------ */}
      <Section02
        title={sec02Title}
        image={강휘성_좋아하는공간}
        text={sec02Text}
      />

      {/* ------------------------ 섹션 03 ------------------------ */}
      <div style={{ position: "relative" }}>
        <Section02 image={강휘성_빠른기차고든} />
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "60%",
          }}
        >
          <Img
            alt="빠른기차 고든!"
            src={강휘성_오브젝트1}
            style={{
              width: "20rem",
              transform: "rotate(8deg)",
              filter: "drop-shadow(0px 2px 3px #c3c3c3)",
            }}
          />
        </div>
      </div>

      {/* ------------------------ 섹션 04 ------------------------ */}
      <Section03
        title={sec04Title}
        image={강휘성_가고싶은공간}
        text={sec04Text}
      />

      {/* ------------------------ 섹션 05 ------------------------ */}
      <Section04
        title={sec05Title}
        image={강휘성_나그리고너}
        text={sec05Text}
      />
    </div>
  );
};

export default HwisungWorldPage;

const Img = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 0.7em;
  @media screen and (max-width: 480px) {
    margin-bottom: 0.5em;
  }
`;
