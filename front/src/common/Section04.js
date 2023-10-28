import React, { useState } from "react";
import { Stack } from "react-bootstrap";

const Section01 = (props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const makeItDark = () => {
    setIsMouseOver(true);
  };

  const makeItBright = () => {
    setIsMouseOver(false);
  };

  return (
    <div>
      <Stack
        gap={4}
        style={{
          fontFamily: "HakgyoansimWoojuR",
          whitepace: "pre-line",
          textAlign: "center",
          margin: "300px auto",
          lineHeight: "160%",
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
              width: "80%",
            }}
          >
            {props.title}
          </h3>
        </div>
        <div className="p-2" style={{ position: "relative" }}>
          <div className="imageContainer" style={{ position: "relative" }}>
            <img
              onMouseOver={makeItDark}
              onMouseOut={makeItBright}
              alt={`${props.image}`}
              src={props.image}
              style={{
                width: "80%",
                filter: `${
                  isMouseOver ? "brightness(50%)" : "brightness(100%)"
                }`,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "8%",
                left: "16%",
                zIndex: 1,
                textAlign: "left",
              }}
            >
              <p
                style={{
                  color: "#ffffff",
                  opacity: `${isMouseOver ? "1" : "0"}`,
                  whiteSpace: "pre-line",
                }}
              >
                {props.text}
              </p>
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default Section01;
