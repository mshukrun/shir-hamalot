import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { BasicBox, RegularText, SubtitleDiv, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const OtherBox = styled(BasicBox)`
  position: relative;
`;

const TextDiv = styled.div`
  ${RegularText}
  padding: 4px 8px;
`;

const OL = styled.div<{
  width?: number;
  height?: number;
  top?: number;
}>`
  position: relative;
  font-weight: 400;
  font-family: "David Libre", serif;
  font-size: 24px;
  line-height: 30px;
  padding: 10px 40px;
  margin-top: ${({ top }) => top || 0}px;
  list-style-type: none;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  height: ${({ height }) => height || 350}px;
  width: ${({ width }) => width || 1100}px;
  white-space: normal;
  column-gap: 30px;
`;

const CreditDiv = styled.div`
  position: absolute;
  ${RegularText}
  bottom: 24px;
  left: 0;
  padding: 16px;
`;

const OtherSong: React.FC<{
  num: number;
  gridArea: string;
  listStyle: string;
}> = ({ num, gridArea, listStyle }) => {
  // @ts-ignore
  const title = l10n.other?.["title" + num];
  // @ts-ignore
  const subtitle = l10n.other?.["subtitle" + num];
  // @ts-ignore
  const lines = l10n.other?.["content" + num].split("|");
  // @ts-ignore
  const credit = l10n.other?.["credit" + num];

  return (
    <OtherBox dir="RTL" style={{ gridArea: gridArea }}>
      <TitleDiv>{title}</TitleDiv>
      {subtitle && <SubtitleDiv>{subtitle}</SubtitleDiv>}
      <OL style={{ listStyle: listStyle }}>
        {lines.map((line: string) => {
          return (
            <li key={faker.datatype.uuid()}>
              <TextDiv>{line}</TextDiv>
            </li>
          );
        })}
      </OL>
      {credit && <CreditDiv>{credit}</CreditDiv>}
    </OtherBox>
  );
};

export default OtherSong;
