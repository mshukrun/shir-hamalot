import React from "react";
import styled from "styled-components";
import { BasicBox, TitleDiv } from "../Common";
import Hadash from "./Hadash";
import l10n from "./l10n.json";

const SiporBox = styled(BasicBox)`
  grid-area: sipor;
  position: relative;
`;

const TextDiv = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  padding: 10px 30px 10px;
`;

const CreditDiv = styled.div`
  position: absolute;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  bottom: 12px;
  left: 35px;
`;

const Sipor = () => {
  return (
    <SiporBox dir="RTL">
      <Hadash />
      <TitleDiv>{l10n.sipor.title}</TitleDiv>
      <TextDiv>{l10n.sipor.text}</TextDiv>
      <CreditDiv>{l10n.sipor.credit}</CreditDiv>
    </SiporBox>
  );
};

export default Sipor;
