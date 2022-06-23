import React from "react";
import styled from "styled-components";
import { BasicBox, TitleDiv } from "../Common";
import Hadash from "./Hadash";
import l10n from "./l10n.json";

const SiporBox = styled(BasicBox)`
  grid-area: sipor;
  position: relative;
`;

const TaktsirDiv = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 30px 2px;
`;

const TaktsirTextDiv = styled.div`
  display: inline;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  padding: 0 4px;
`;

const TextDiv = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  padding: 10px 30px 10px;
`;

const HemshehDiv = styled.div`
  position: absolute;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  bottom: 36px;
  left: 35px;
`;

const CreditDiv = styled.div`
  position: absolute;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  bottom: 12px;
  right: 35px;
`;

const Sipor = () => {
  return (
    <SiporBox dir="RTL">
      <TitleDiv>{l10n.sipor.title}</TitleDiv>
      <TaktsirDiv>
        {l10n.sipor.taktsir}
        <TaktsirTextDiv>{l10n.sipor.taktsirText}</TaktsirTextDiv>
      </TaktsirDiv>
      <TextDiv>{l10n.sipor.text}</TextDiv>
      <HemshehDiv>{l10n.sipor.hemsheh}</HemshehDiv>
      <CreditDiv>{l10n.sipor.credit}</CreditDiv>
    </SiporBox>
  );
};

export default Sipor;
