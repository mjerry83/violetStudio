import React from "react";
import { useNavigate } from "react-router-dom";

const StudentPage = () => {
  const navigate = useNavigate();

  const navigateToSunmin = () => {
    navigate("/SunminWorld");
  };

  const navigateToSoyeon = () => {
    navigate("/SoyeonWorld");
  };

  const navigateToSiwoo = () => {
    navigate("/SiwooWorld");
  };

  const navigateToWonhee = () => {
    navigate("/WonheeWorld");
  };

  const navigateToSiyeon = () => {
    navigate("/SiyeonWorld");
  };

  const navigateToHyaeSun = () => {
    navigate("/HyaesunWorld");
  };

  const navigateToHwisung = () => {
    navigate("/HwisungWorld");
  };

  return (
    <div>
      <h1> 학생리스트 페이지입니다.</h1>
      <button onClick={navigateToHwisung}>강휘성 학생</button>
      <button onClick={navigateToSiwoo}>김시우 학생</button>
      <button onClick={navigateToHyaeSun}>김혜선 학생</button>
      <button onClick={navigateToSiyeon}>문시연 학생</button>
      <button onClick={navigateToSoyeon}>안소연 학생</button>
      <button onClick={navigateToSunmin}>오선민 학생</button>
      <button onClick={navigateToWonhee}>이원희 학생</button>
    </div>
  );
};

export default StudentPage;
