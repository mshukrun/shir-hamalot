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
  white-space: normal;
`;

const OL = styled.ol`
  ${RegularText}
  padding: 0 8px;
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
  height: string;
  blockWidth: string;
}> = ({ num, gridArea, listStyle, height, blockWidth }) => {
  // @ts-ignore
  const title = l10n.other?.["title" + num];
  // @ts-ignore
  const subtitle = l10n.other?.["subtitle" + num];
  // @ts-ignore
  const blocks = l10n.other?.["content" + num].split("||");
  // @ts-ignore
  const credit = l10n.other?.["credit" + num];

  return (
    <OtherBox dir="RTL" style={{ gridArea: gridArea }}>
      <TitleDiv>{title}</TitleDiv>
      {subtitle && <SubtitleDiv>{subtitle}</SubtitleDiv>}
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          height: height,
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {blocks.map((block: string, index: number) => {
          return (
            <OL key={index} style={{ listStyle: listStyle }}>
              {block.split("|").map((line: string) => {
                return (
                  <li key={faker.datatype.uuid()}>
                    <TextDiv style={{ width: blockWidth }}>{line}</TextDiv>
                  </li>
                );
              })}
            </OL>
          );
        })}
      </div>
      {credit && <CreditDiv>{credit}</CreditDiv>}
    </OtherBox>
  );
};

export default OtherSong;
