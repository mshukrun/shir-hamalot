import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { BasicBox, RegularText, MediumText, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const ParashaBox = styled(BasicBox)`
  grid-area: Parasha;
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
  column-gap: 16px;
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
  const questions = l10n.parasha.content.split("||");
  return (
    <ParashaBox dir="RTL">
      <TitleDiv>{l10n.parasha.title}</TitleDiv>
      <div>
        <OL>
          {questions.map((question) => {
            const parts = question.split("|");
            return (
              <LI key={faker.datatype.uuid()}>
                <LetterDiv>{parts[0]}</LetterDiv>
                <TextDiv>{parts[1]}</TextDiv>
              </LI>
            );
          })}
        </OL>
      </div>
    </ParashaBox>
  );
};

export default Parasha;
