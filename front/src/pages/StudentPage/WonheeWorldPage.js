import React from "react";
import { Stack, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WonheeWorldPage = () => {
  const navigate = useNavigate();

  const backHandler = () => {
    navigate("/student");
  };
  return (
    <div>
      {/* ------------------------인트로 섹션------------------------ */}
      <Stack
        className="introWrapper"
        gap={3}
        style={{
          fontFamily: "HakgyoansimWoojuR",
          textAlign: "center",
        }}
      >
        <div className="p-2">
          <div
            ClassName="introImageWrapper"
            style={{ backgroundColor: "#FDF2FF", padding: "50px 0 50px 0" }}
          >
            <img
              ClassName="artwork5week"
              alt="타이틀 예시"
              style={{
                width: "24%",
              }}
            />
          </div>
        </div>
        <div className="p-2">
          <h1 ClassName="title" style={{ margin: "50px 0 30px 0" }}>
            나의 월드 (MY WORLD)
          </h1>
        </div>
        <div className="p-2">
          <p ClassName="artistStatement">
            오늘 적어볼 작가소개 칸이에요! 나를 소개할 수 있는 문구들로
            채워봅시다.
            <br />
            오늘 적어볼 작가소개 칸이에요! 나를 소개할 수 있는 문구들로
            채워봅시다.
            <br />
            오늘 적어볼 작가소개 칸이에요! 나를 소개할 수 있는 문구들로
            채워봅시다.
            <br />
          </p>
        </div>
      </Stack>
    </div>
  );
};

export default WonheeWorldPage;
