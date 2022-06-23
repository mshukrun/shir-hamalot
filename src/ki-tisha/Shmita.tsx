import React from "react";
import styled from "styled-components";
import { BasicBox, TitleDiv } from "../Common";
import Havrota from "./Havrota";
import l10n from "./l10n.json";

const ShmitaBox = styled(BasicBox)`
  grid-area: shmita;
  position: relative;
`;

const SubtitleDiv = styled.div`
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  padding: 10px 30px 0;
`;

const TextDiv = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  padding: 20px 30px 10px;
`;

const RakSpan = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  text-decoration: underline;
  margin: 0 4px;
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
