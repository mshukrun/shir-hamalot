import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import {
  BasicBox,
  RegularText,
  SmallText,
  SubtitleDiv,
  TitleDiv,
} from "../Common";
import l10n from "./l10n.json";

const OtherBox = styled(BasicBox)`
  position: relative;
`;

const TextDiv = styled.div`
  ${RegularText}
  padding: 8px 16px;
`;

const OL = styled.ol`
  ${RegularText}
  padding: 0 40px 10px;
`;

const CreditDiv = styled.div`
  position: absolute;
  ${SmallText}
  bottom: 0;
  left: 0;
  padding: 16px;
  width: 100%;
`;

const IdanSong: React.FC<{
  num: number;
  gridArea: string;
}> = ({ num, gridArea }) => {
  // @ts-ignore
  const title = l10n.other?.["title" + num];
  // @ts-ignore
  const subtitle = l10n.other?.["subtitle" + num];
  // @ts-ignore
  const content = l10n.other?.["content" + num];
  // @ts-ignore
  const credit = l10n.other?.["credit" + num];

  const lines = content.split("|||");

  const songLines = lines?.[0]?.split("|");
  const comment = lines?.[1];

  return (
    <OtherBox dir="RTL" style={{ gridArea: gridArea }}>
      <TitleDiv>{title}</TitleDiv>
      {subtitle && <SubtitleDiv>{subtitle}</SubtitleDiv>}
      <OL style={{ listStyle: "none" }}>
        {songLines.map((line: string) => {
          return (
            <li key={faker.datatype.uuid()}>
              <TextDiv>{line}</TextDiv>
            </li>
          );
        })}
      </OL>
      {comment && <CreditDiv>{comment}</CreditDiv>}
    </OtherBox>
  );
};

export default IdanSong;
