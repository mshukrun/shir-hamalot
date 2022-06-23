import React from "react";
import styled from "styled-components";
import { BasicBox, RegularPlusText, TitleDiv } from "../Common";
import Havrota from "./Havrota";
import l10n from "./l10n.json";
import OtherAbs from "./OtherAbs";

const ShmitaBox = styled(BasicBox)`
  grid-area: Shmita;
  position: relative;
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
      <TextDiv>{l10n.shmita.text}</TextDiv>
      <OtherAbs num={1} b="20px" r="10px" w="290px" />
    </ShmitaBox>
  );
};

export default Shmita;
