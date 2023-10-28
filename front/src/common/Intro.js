import React from "react";
import { Stack } from "react-bootstrap";

const IntroSection = (props) => {
  return (
    <div>
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
            style={{
              backgroundColor: `${props.introColor}`,
              padding: "50px 0 50px 0",
            }}
          >
            <img
              ClassName="artwork5week"
              alt="학생페이지 인트로 이미지"
              src={props.introImage}
              style={{
                width: "30%",
              }}
            />
          </div>
        </div>
        <div className="p-2">
          <h1 ClassName="title" style={{ margin: "50px 0 30px 0" }}>
            {props.title}
          </h1>
        </div>
        <div className="p-2">
          <p
            ClassName="artistStatement"
            style={{ whiteSpace: "pre-line", lineHeight: "160%" }}
          >
            {props.statement}
          </p>
        </div>
      </Stack>
    </div>
  );
};

export default IntroSection;
