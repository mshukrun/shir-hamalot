import React from "react";
import styled from "styled-components";
import { BasicBox, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const ParashaBox = styled(BasicBox)`
  grid-area: parasha;
  position: relative;
`;

const OL = styled.ol`
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  text-align: right;
  list-style: none;
  padding: 10px 20px 10px;
`;

const Div = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  text-align: right;
  list-style: none;
  padding: 10px 20px 10px;
`;

const LI = styled.li`
  display: flex;
  column-gap: 12px;
`;

const TextDiv = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  text-align: right;
`;

const LetterDiv = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
`;

const Parasha = () => {
  return (
    <ParashaBox dir="RTL">
      <TitleDiv>{l10n.parasha.title}</TitleDiv>
      <Div>
        <TextDiv>{l10n.parasha.firstText}</TextDiv>
        <LetterDiv>{l10n.parasha.firstL}</LetterDiv>
      </Div>
    </ParashaBox>
  );
};

export default Parasha;
