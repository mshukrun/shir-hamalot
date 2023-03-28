import React from "react";
import styled, { css } from "styled-components";
import { faker } from "@faker-js/faker";
import { BasicBox, SmallText, TinyText, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const PitaromBox = styled(BasicBox)<{
  b?: string;
  t?: string;
  l?: string;
  r?: string;
  w?: string;
}>`
  position: absolute;
  ${({ t }) =>
    css`
      top: ${t};
    `};
  ${({ b }) =>
    css`
      bottom: ${b};
    `};
  ${({ r }) =>
    css`
      right: ${r};
    `};
  ${({ l }) =>
    css`
      left: ${l};
    `};
  width: ${({ w }) => w || "50%"};
`;

const PTitle = styled(TitleDiv)`
  ${SmallText}
  margin: 4px auto 0;
`;

const OL = styled.ol`
  ${TinyText}
  list-style-type: disc;
  padding: 4px 25px 4px 10px;
  transform: rotate(-180deg);
  font-size: 10px;
  line-height: 12px;
`;

const TextDiv = styled.div`
  ${TinyText}
`;

const Pitaron: React.FC<{
  b?: string;
  t?: string;
  l?: string;
  r?: string;
  w?: string;
}> = ({ w, t, l, b, r }) => {
  const lines = l10n.pitaron.content.split("|");
  return (
    <PitaromBox dir="RTL" w={w} t={t} l={l} b={b} r={r}>
      <PTitle>{l10n.pitaron.title}</PTitle>
      <OL>
        {lines.map((line) => {
          return (
            <li key={faker.datatype.uuid()}>
              <TextDiv>{line}</TextDiv>
            </li>
          );
        })}
      </OL>
    </PitaromBox>
  );
};

export default Pitaron;
