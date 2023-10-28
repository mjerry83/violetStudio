import React from "react";
import { useNavigate } from "react-router-dom";

import IntroSection from "../../common/Intro";
import Section01 from "../../common/Section01";
import Section02 from "../../common/Section02";
import Section04 from "../../common/Section04";
import Section05 from "../../common/Section05";

import 오선민표지 from "../images/표지/오선민-표지.png";
import 오선민_나를이루는것들 from "../images/5주차 작품/오선민_5주차.png";
import 오선민_나그리고너 from "../images/6주차 작품/GIF작품/오선민(1).GIF";
import 오선민_가고싶은공간 from "../images/7주차 작품/오선민 7주차 (2).gif";
import 오선민_싫어하는공간 from "../images/7주차 작품/오선민 7주차 (3).gif";
import 오선민_좋아하는공간 from "../images/7주차 작품/오선민 7주차 (1).gif";

const SunminWorldPage = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/student");
  };
  const title = "사이트 제목을 적어봅시다!";
  const statement =
    "사이트 설명도 적어봅시다! \n 사이트 설명도 적어봅시다! \n 사이트 설명도 적어봅시다!";

  const sec01Title = "나를 이루는 것들: 외계인과의 만남";
  const sec01Text =
    "뽀롱뽀롱 마을에 별동별이 떨어지고 있어요! \n 뽀로로와 친구들이 별을 보고 있네요! \n 빼꼼과 뽀로로와 친구들은 외계인을 만나서 함께 캠핑을 하고 있어요! \n 친구들이 다 기분이 좋아보이는 것 같아요! \n 빼꼼은 외계인을 보며 깜짝 놀랐답니다!";

  const sec02Title = "나 그리고 너: 운수좋은 날";
  const sec02_1Text =
    "\n \n \n \n 빼꼼과 뽀로로와 친구들! \n 모두 같이 눈밭에서 놀고 있어요! \n 천사는 날아가면서 친구들이 뭐하나? 보고 있네요.";
  const sec02_2Text =
    "<주니어네이버>에 나온 파란 멜빵치마를 입은 여자애도 넣었어요. \n 빼꼼은 빨간 의자에 앉아있고, \n 뽀로로와 크롱, 패티, 루피, 해리, 포비는 \n 에디가 어디가나 궁금해하고 있네요. \n\n 천사는 생선트럭을 보고 마법을 뿌렸어요! \n 생선차는 친구들이 생선을 먹고 싶어서 생선차를 타고 왔어요!";

  const sec03Title = "그곳에서의 나: 좋아하는 공간 - 롯데월드";
  const sec03Text =
    "롯데월드는 뽀롱뽀롱마을로 만들었어요. \n 애니메이션을 좀 통통 튀게 만들었답니다!";

  const sec04Title = "그곳에서의 나: 싫어하는 공간 - 공용샤워실";
  const sec04Text =
    '"공용샤워실은 무섭고, 환풍기 소리가 무섭게 들려서 샤워하는 게 무섭다. \n 마음대로 설명을 하는 것처럼 그냥 환풍기가 무서웠다!"';

  const sec05Title = "그곳에서의 나: 좋아하는 공간 - 텔레비전 방";
  const sec05_1Text =
    '\n "텔레비전 방은 재미있는 \n 캐릭터 애니메이션을 보여준다!"';
  const sec05_2Text = '"형태가 재미있어서 \n 달과 하트 모양으로 표현했다!"';

  return (
    <div>
      {/* ------------------------ 인트로 섹션 ------------------------ */}
      <IntroSection
        introColor="#FFE552"
        introImage={오선민표지}
        title={title}
        statement={statement}
      />

      {/* ------------------------ 섹션 01 ------------------------ */}
      <Section02
        title={sec01Title}
        image={오선민_나를이루는것들}
        text={sec01Text}
      />

      {/* ------------------------ 섹션 02 ------------------------ */}
      <Section05
        title={sec02Title}
        image={오선민_나그리고너}
        text01={sec02_1Text}
        text02={sec02_2Text}
      />

      {/* ------------------------ 섹션 03 ------------------------ */}
      <Section01
        title={sec03Title}
        image={오선민_가고싶은공간}
        text={sec03Text}
      />

      {/* ------------------------ 섹션 04 ------------------------ */}
      <Section02
        title={sec04Title}
        image={오선민_싫어하는공간}
        text={sec04Text}
      />

      {/* ------------------------ 섹션 05 ------------------------ */}
      <Section05
        title={sec05Title}
        image={오선민_좋아하는공간}
        text01={sec05_1Text}
        text02={sec05_2Text}
      />
    </div>
  );
};

export default SunminWorldPage;
