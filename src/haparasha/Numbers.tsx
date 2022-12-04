import React from "react";
import styled from "styled-components";
import {
  BasicBox,
  DavidMediumText,
  RegularText,
  SubtitleDiv,
  TitleDiv,
} from "../Common";
import l10n from "./l10n.json";

const NumbersBox = styled(BasicBox)`
  grid-area: Numbers;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const ContentBox = styled.div`
  ${DavidMediumText}
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 10px;
`;

const TextDiv = styled.div`
  ${RegularText}
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 4px;
`;

const Numbers = () => {
  return (
    <NumbersBox dir="RTL">
      <TitleDiv>{l10n.numbers.title}</TitleDiv>
      <SubtitleDiv>{l10n.numbers.subtitle}</SubtitleDiv>
      <ContentBox>{l10n.numbers.content}</ContentBox>
      {l10n.numbers.note && <TextDiv>{l10n.numbers.note}</TextDiv>}
    </NumbersBox>
  );
};

export default Numbers;
