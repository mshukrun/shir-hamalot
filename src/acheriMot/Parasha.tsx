import React from "react";
import styled from "styled-components";
import { BasicBox, RegularText, MediumText, TitleDiv } from "../Common";
import l10n from "./l10n.json";
import Note from "./Note";

const ParashaBox = styled(BasicBox)`
  grid-area: parasha;
  position: relative;
`;

const OL = styled.ol`
  ${RegularText}
  text-align: right;
  list-style: none;
  padding: 5px 20px 10px;
`;

const LI = styled.li`
  display: flex;
  align-items: baseline;
  column-gap: 8px;
`;

const TextDiv = styled.div`
  ${RegularText}
  text-align: right;
`;

const LetterDiv = styled.div`
  ${MediumText}
  font-family: "Bona Nova", serif;
  width: 14px;
`;

const Parasha = () => {
  const foods: number[] = [];
  for (let index = 1; index < 8; index++) {
    foods.push(index);
  }
  return (
    <ParashaBox dir="RTL">
      <TitleDiv>{l10n.parasha.title}</TitleDiv>
      <div>
        <OL>
          {foods.map((index: number) => {
            return (
              <LI>
                {/* @ts-ignore */}
                <LetterDiv>{l10n.parasha?.[`letter${index}`]}</LetterDiv>
                {/* @ts-ignore */}
                <TextDiv>{l10n.parasha?.[`riddle${index}`]}</TextDiv>
              </LI>
            );
          })}
        </OL>
      </div>
      <Note />
    </ParashaBox>
  );
};

export default Parasha;
