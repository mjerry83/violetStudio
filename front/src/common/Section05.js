import React from "react";
import { Stack } from "react-bootstrap";

const Section05 = (props) => {
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
          <div className="imageContainer">
            <img
              alt={`${props.image}`}
              src={props.image}
              style={{
                width: "80%",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "-10%",
                left: "60%",
                zIndex: 1,
              }}
            >
              <p
                style={{
                  padding: "20px",
                  whiteSpace: "pre-line",
                  textShadow: "0 0 1px gray",
                  backgroundColor: "rgba( 255, 255, 255, 0.5 )",
                }}
              >
                {props.text01}
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: "88%",
                left: "16%",
                zIndex: 1,
              }}
            >
              <p
                style={{
                  padding: "20px",
                  whiteSpace: "pre-line",
                  textShadow: "0 0 1px gray",
                  backgroundColor: "rgba( 255, 255, 255, 0.5 )",
                }}
              >
                {props.text02}
              </p>
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default Section05;
