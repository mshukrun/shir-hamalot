import React from "react";
import styled from "styled-components";
import { BasicBox, RegularPlusText, SubTitleText, TitleDiv } from "../Common";
import OtherAbs from "./OtherAbs";
import Havrota from "./Havrota";
import l10n from "./l10n.json";

const ShmitaBox = styled(BasicBox)`
  grid-area: Shmita;
  position: relative;
`;

const SubtitleDiv = styled.div`
  ${SubTitleText}
  padding: 75px 20px 0;
`;

const TextDiv = styled.div`
  ${RegularPlusText}
  padding: 20px 20px 10px;
`;

const Shmita = () => {
  return (
    <ShmitaBox dir="RTL">
      <Havrota />
      <TitleDiv>{l10n.shmita.title}</TitleDiv>
      <SubtitleDiv>{l10n.shmita.subtitle}</SubtitleDiv>
      <TextDiv>{l10n.shmita.text}</TextDiv>
      <OtherAbs num={1} t="65px" r="10px" w="500px" />
    </ShmitaBox>
  );
};

export default Shmita;
