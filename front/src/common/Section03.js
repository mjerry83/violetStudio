import React from "react";
import { Stack } from "react-bootstrap";
import styled from "styled-components";

const Section03 = (props) => {
  return (
    <div>
      <Stack
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
          <Crop>
            <div className="imgConatainer">
              <Img
                alt={`${props.image}`}
                src={props.image}
                style={{ width: "80%" }}
              />
            </div>
          </Crop>
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

export default Section03;

const Crop = styled.div`
  .imgConatainer {
    img {
      height: 720px;
      object-fit: cover;
    }
  }
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 0.7em;
  @media screen and (max-width: 480px) {
    margin-bottom: 0.5em;
  }
`;
