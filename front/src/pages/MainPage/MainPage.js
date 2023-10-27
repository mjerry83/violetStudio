import React, { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/student");
  };

  return (
    <div>
      <h1>2023 장애청소년 미술교육 보라반 페이지입니다.</h1>
      <button id="stuBtn" onClick={navigateHandler}>
        학생들 보러가기
      </button>
    </div>
  );
};

export default MainPage;
