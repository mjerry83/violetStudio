import React from "react";
import { useNavigate } from "react-router-dom";

import IntroSection from "../../common/Intro";
import Section01 from "../../common/Section01";
import Section02 from "../../common/Section02";
import Section04 from "../../common/Section04";
import Section05 from "../../common/Section05";

import 김시우표지 from "../images/표지/김시우.png";

const SiwooWorldPage = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/student");
  };

  const title = "튼튼이 친구들!";
  const statement = "";

  return (
    <div>
      {/* ------------------------ 인트로 섹션 ------------------------ */}
      <IntroSection
        introColor="#6D9CD1"
        introImage={김시우표지}
        title={title}
        statement={statement}
      />
    </div>
  );
};

export default SiwooWorldPage;
