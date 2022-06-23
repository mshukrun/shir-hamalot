import React from "react";
import styled, { css } from "styled-components";
import { BasicBox, DavidRegularText, SmallText } from "../Common";
import l10n from "./l10n.json";

const OtherBox = styled(BasicBox)<{
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
  padding: 8px 16px;
`;

const TitleDiv = styled.div`
  ${DavidRegularText}
  padding-bottom: 8px;
  margin: 0 auto;
`;

const TextDiv = styled.div`
  ${SmallText}
`;

const OtherAbs: React.FC<{
  num: number;
  b?: string;
  t?: string;
  l?: string;
  r?: string;
  w?: string;
}> = ({ num, w, t, l, b, r }) => {
  // @ts-ignore
  const title = l10n.other?.["title" + num];
  // @ts-ignore
  const content = l10n.other?.["content" + num];
  return (
    <OtherBox dir="RTL" w={w} t={t} l={l} b={b} r={r}>
      <TitleDiv>{title}</TitleDiv>
      <TextDiv>{content}</TextDiv>
    </OtherBox>
  );
};

export default OtherAbs;
