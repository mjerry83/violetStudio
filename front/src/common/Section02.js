import React from "react";
import { Stack } from "react-bootstrap";

const Section02 = (props) => {
  return (
    <div>
      <Stack
        className="section1"
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
        <div className="p-2">
          <div className="imageContainer">
            <img
              ClassName="artwork5week"
              alt={`${props.image}`}
              src={props.image}
              style={{
                width: "80%",
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
              width: "80%",
              whiteSpace: "pre-line",
            }}
          >
            {props.text}
          </p>
        </div>
      </Stack>
    </div>
  );
};

export default Section02;
