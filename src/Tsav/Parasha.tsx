import React from "react";
import styled from "styled-components";
import { BasicBox, RegularText, MediumText, TitleDiv } from "../Common";
import l10n from "./l10n.json";
import Shimha from "./Shimha";

const ParashaBox = styled(BasicBox)`
  grid-area: parasha;
  position: relative;
`;

const OL = styled.ol`
  ${RegularText}
  text-align: right;
  list-style: none;
  padding: 5px 10px 10px;
`;

const LI = styled.li`
  display: flex;
  align-items: baseline;
  column-gap: 12px;
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
  return (
    <ParashaBox dir="RTL">
      <TitleDiv>{l10n.parasha.title}</TitleDiv>
      <div>
        <OL>
          <LI>
            <LetterDiv>{l10n.parasha.firstL}</LetterDiv>
            <TextDiv>{l10n.parasha.firstText}</TextDiv>
          </LI>
          <LI>
            <LetterDiv>{l10n.parasha.secondL}</LetterDiv>
            <TextDiv>{l10n.parasha.sechondText}</TextDiv>
          </LI>
          {/* <LI>
            <LetterDiv>{l10n.parasha.thirdL}</LetterDiv>
            <TextDiv>{l10n.parasha.thirdText}</TextDiv>
          </LI>
          <LI>
            <LetterDiv>{l10n.parasha.fourL}</LetterDiv>
            <TextDiv>{l10n.parasha.fourText}</TextDiv>
          </LI>
          <LI>
            <LetterDiv>{l10n.parasha.fiveL}</LetterDiv>
            <TextDiv>{l10n.parasha.fiveText}</TextDiv>
          </LI> */}
        </OL>
      </div>
      <Shimha />
    </ParashaBox>
  );
};

export default Parasha;
