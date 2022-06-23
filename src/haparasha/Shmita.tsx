import React from "react";
import styled from "styled-components";
import {
  BasicBox,
  RegularPlusText,
  RegularText,
  SubTitleText,
  TitleDiv,
} from "../Common";
import Havrota from "./Havrota";
import l10n from "./l10n.json";

const ShmitaBox = styled(BasicBox)`
  grid-area: Shmita;
  position: relative;
`;

const SubtitleDiv = styled.div`
  ${SubTitleText}
  padding: 15px 20px 0;
`;

const TextDiv = styled.div`
  ${RegularPlusText}
  padding: 20px 20px 10px;
`;

const CreditDiv = styled.div`
  position: absolute;
  ${RegularText}
  bottom: 20px;
  right: 15px;
  text-decoration: underline;
`;

const Shmita = () => {
  return (
    <ShmitaBox dir="RTL">
      <Havrota />
      <TitleDiv>{l10n.shmita.title}</TitleDiv>
      <SubtitleDiv>{l10n.shmita.subtitle}</SubtitleDiv>
      <TextDiv>{l10n.shmita.text}</TextDiv>
      <CreditDiv>{l10n.shmita.credit}</CreditDiv>
    </ShmitaBox>
  );
};

export default Shmita;
