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
  padding: 8px;
`;

const OL = styled.ol`
  ${RegularText}
  padding: 0 32px;
  margin-right: 16px;
`;

const CreditDiv = styled.div`
  position: absolute;
  ${RegularText}
  bottom: 10px;
  left: 25px;
`;

const OtherLines: React.FC<{
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

export default OtherLines;
