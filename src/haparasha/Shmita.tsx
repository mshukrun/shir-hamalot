import React from "react";
import styled from "styled-components";
import { BasicBox, RegularText, SubTitleText, TitleDiv } from "../Common";
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
  ${RegularText}
  padding: 10px 20px 10px;
`;

const CreditDiv = styled.div`
  position: absolute;
  ${RegularText}
  bottom: 10px;
  left: 25px;
  text-decoration: underline;
`;

const Shmita = () => {
  const content = l10n.shmita.text.split("|");
  return (
    <ShmitaBox dir="RTL">
      <TitleDiv>{l10n.shmita.title}</TitleDiv>
      {l10n.shmita.subtitle && (
        <SubtitleDiv>{l10n.shmita.subtitle}</SubtitleDiv>
      )}
      {content.map((p: string) => {
        return <TextDiv>{p}</TextDiv>;
      })}
      <TextDiv>{l10n.shmita.note}</TextDiv>
      <CreditDiv>{l10n.shmita.credit}</CreditDiv>
    </ShmitaBox>
  );
};

export default Shmita;
