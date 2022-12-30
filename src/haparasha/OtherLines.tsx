import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { BasicBox, RegularText, TitleDiv } from "../Common";
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

const OtherLines: React.FC<{
  num: number;
  gridArea: string;
  listStyle: string;
}> = ({ num, gridArea, listStyle }) => {
  // @ts-ignore
  const title = l10n.other?.["title" + num];
  // @ts-ignore
  const lines = l10n.other?.["content" + num].split("|");
  return (
    <OtherBox dir="RTL" style={{ gridArea: gridArea }}>
      <TitleDiv>{title}</TitleDiv>
      <OL style={{ listStyle: listStyle }}>
        {lines.map((line: string) => {
          return (
            <li key={faker.datatype.uuid()}>
              <TextDiv>{line}</TextDiv>
            </li>
          );
        })}
      </OL>
    </OtherBox>
  );
};

export default OtherLines;
