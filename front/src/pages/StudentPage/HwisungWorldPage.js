import React from "react";
import { Stack, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import 타이틀예시 from "../images/title예시.png";

import 강휘성작품1 from "../images/5주차 작품/강휘성_5주차 (1).png";
import 강휘성작품2 from "../images/7주차 작품/강휘성 7주차-1.gif";
import 강휘성작품3 from "../images/5주차 작품/강휘성_5주차 (2).png";
import 강휘성작품4 from "../images/7주차 작품/강휘성 7주차-3.gif";
import 강휘성작품5 from "../images/7주차 작품/강휘성 7주차-4.gif";

import 강휘성기차1 from "../images/6주차 작품/강휘성-기차1.png";
import 강휘성어머니1 from "../images/6주차 작품/강휘성-어머니1.png";
import 강휘성어머니2 from "../images/6주차 작품/강휘성-어머니2.png";
import 강휘성아버지1 from "../images/6주차 작품/강휘성-아버지1.png";
import 강휘성아버지2 from "../images/6주차 작품/강휘성-아버지2.png";

const HwisungWorldPage = () => {
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
              src={타이틀예시}
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

      {/* <button onClick={backHandler} style={{ fontFamily: "HakgyoansimWoojuR" }}>
        돌아가기
      </button> */}

      {/* ------------------------섹션1------------------------ */}

      <Stack
        className="section1"
        gap={4}
        style={{
          fontFamily: "HakgyoansimWoojuR",
          whitepace: "pre-line",
          textAlign: "center",
          margin: "500px auto",
        }}
      >
        <div
          className="p-2"
          style={{
            display: "flex",
            textAlign: "left",
            justifyContent: "center",
          }}
        >
          <h3
            ClassName="section01Title"
            style={{
              width: "72%",
            }}
          >
            나를 이루는 것들: 작품제목
          </h3>
        </div>
        <div className="p-2">
          <div className="imageContainer">
            <img
              ClassName="artwork5week"
              alt="강휘성 5주차 작품"
              src={강휘성작품1}
              style={{
                width: "72%",
              }}
            />
          </div>
        </div>
        <div
          className="p-2"
          style={{
            display: "flex",
            textAlign: "right",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              width: "72%",
            }}
          >
            '고든'하고 '토마스', 「몬스터 주식회사」, 그리고
            「벅스라이프」입니다. <br />
            내가 좋아하는 영웅들이에요. 친구들을 구해주고, 좋은 꿈을 꾸게
            해줍니다.
            <br />
            친구도 만날 수 있습니다.
          </p>
        </div>
        <div className="p-2">
          <div className="imageContainer" style={{ margin: "200px 0 160px 0" }}>
            <img
              ClassName="artwork5week"
              alt="강휘성 7주차 작품"
              src={강휘성작품3}
              style={{
                width: "72%",
              }}
            />
          </div>
        </div>
      </Stack>

      {/* ------------------------섹션2------------------------ */}

      <Stack
        className="section1"
        gap={5}
        style={{
          fontFamily: "HakgyoansimWoojuR",
          whitepace: "pre-line",
          textAlign: "center",
        }}
      >
        <div
          className="p-2"
          style={{
            display: "flex",
            textAlign: "left",
            justifyContent: "center",
          }}
        >
          <h3
            ClassName="section01Title"
            style={{
              width: "72%",
            }}
          >
            그곳에서의 나: 내가 좋아하는 공간
          </h3>
        </div>
        <div className="p-2">
          <div className="imageContainer">
            <img
              ClassName="artwork7week"
              alt="강휘성 7주차 작품"
              src={강휘성작품2}
              style={{
                width: "72%",
              }}
            />
          </div>
        </div>
        <div
          className="p-2"
          style={{
            display: "flex",
            textAlign: "left",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              width: "72%",
            }}
          >
            내가 좋아하는 공간인 '침대' <br />
            침대에서 자는 것이 가장 좋습니다.
          </p>
        </div>
      </Stack>

      {/* ------------------------섹션3------------------------ */}

      <Stack
        className="section1"
        gap={2}
        style={{
          fontFamily: "HakgyoansimWoojuR",
          whitepace: "pre-line",
          textAlign: "center",
        }}
      >
        <div className="p-2">
          <div
            className="imageContainer"
            style={{ margin: "400px 0px 0px 0px" }}
          >
            <img
              ClassName="artwork7week"
              alt="강휘성 7주차 작품"
              src={강휘성작품4}
              style={{
                width: "72%",
              }}
            />
          </div>
        </div>
        <div
          className="p-2"
          style={{
            display: "flex",
            textAlign: "right",
            justifyContent: "center",
            margin: "0px 0px 400px 0px",
          }}
        >
          <p
            style={{
              width: "72%",
            }}
          >
            빠른 기차 고든. <br />
            증기를 내뿜으며 누구보다 빠르게 질주합니다.
          </p>
        </div>
      </Stack>

      {/* ------------------------섹션4------------------------ */}

      <Stack
        className="section1"
        gap={5}
        style={{
          fontFamily: "HakgyoansimWoojuR",
          whitepace: "pre-line",
          textAlign: "center",
        }}
      >
        <div
          className="p-2"
          style={{
            display: "flex",
            textAlign: "left",
            justifyContent: "center",
          }}
        >
          <h3
            ClassName="section01Title"
            style={{
              width: "72%",
            }}
          >
            그곳에서의 나: 내가 좋아하는 공간
          </h3>
        </div>

        <div className="p-2">
          <Container
            style={{
              display: "flex",
              textAlign: "left",
              justifyContent: "center",
            }}
          >
            <Row>
              <Col sm={3}>
                <div className="imageContainer">
                  <img
                    ClassName="artwork5week"
                    alt="강휘성 7주차 작품"
                    src={강휘성작품5}
                    style={{
                      height: "16%",
                    }}
                  />
                </div>
              </Col>
              <Col sm={7}>
                <p
                  style={{
                    width: "72%",
                  }}
                >
                  내가 좋아하는 공간인 '침대' <br />
                  침대에서 자는 것이 가장 좋습니다.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Stack>

      {/* ------------------------ 이미지 요소 ------------------------ */}
      <Stack
        className="section1"
        gap={2}
        style={{
          fontFamily: "HakgyoansimWoojuR",
          whitepace: "pre-line",
          textAlign: "center",
        }}
      >
        <div className="p-2">
          <div
            className="imageContainer"
            style={{ margin: "200px 0px 0px 0px" }}
          >
            <img
              ClassName="object1"
              alt="강휘성 기차 오브젝트"
              src={강휘성기차1}
              style={{
                position: "absolute",
                top: "80%",
                left: "7%",
                width: "30%",
                transform: "rotate(3deg)",
              }}
            />
            <img
              ClassName="object1"
              alt="강휘성 어머니1 오브젝트"
              src={강휘성어머니1}
              style={{
                position: "absolute",
                top: "520%",
                left: "54%",
                width: "16%",
                transform: "rotate(-20deg)",
              }}
            />
            <img
              ClassName="object1"
              alt="강휘성 아버지1 오브젝트"
              src={강휘성아버지1}
              style={{
                position: "absolute",
                top: "516%",
                left: "70%",
                width: "18%",
                transform: "rotate(-20deg)",
              }}
            />
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default HwisungWorldPage;
