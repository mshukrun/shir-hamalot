import React from "react";
import styled from "styled-components";
import { BasicBox, RegularText, TitleDiv } from "../Common";
import Havrota from "./Havrota";
import l10n from "./l10n.json";

const ShmitaBox = styled(BasicBox)`
  grid-area: shmita;
  position: relative;
`;

const TextDiv = styled.div`
  ${RegularText}
  padding: 20px 30px 10px;
`;

const Shmita = () => {
  return (
    <ShmitaBox dir="RTL">
      <Havrota />
      <TitleDiv>{l10n.shmita.title}</TitleDiv>
      <TextDiv>{l10n.shmita.text}</TextDiv>
    </ShmitaBox>
  );
};

export default Shmita;
