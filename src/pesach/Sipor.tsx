import React from "react";
import styled from "styled-components";
import { BasicBox, RegularText, TitleDiv } from "../Common";
import Azarim from "./azarim";
import l10n from "./l10n.json";

const SiporBox = styled(BasicBox)`
  grid-area: sipor;
  position: relative;
`;

// const TaktsirDiv = styled.div`
//   ${SmallText}
//   font-weight: 600;
//   padding: 10px 30px 2px;
// `;

// const TaktsirTextDiv = styled.div`
//   display: inline;
//   ${SmallText}
//   padding: 0 4px;
// `;

const TextDiv = styled.div`
  ${RegularText}
  padding: 10px 30px 10px;
`;

const HemshehDiv = styled.div`
  position: absolute;
  ${RegularText}
  font-weight: 600;
  bottom: 36px;
  left: 35px;
`;

// const CreditDiv = styled.div`
//   position: absolute;
//   ${RegularText}
//   bottom: 12px;
//   right: 35px;
// `;

const Sipor = () => {
  return (
    <SiporBox dir="RTL">
      {/* <Hadash /> */}
      <TitleDiv>{l10n.sipor.title}</TitleDiv>
      {/* <TaktsirDiv>
        {l10n.sipor.taktsir}
        <TaktsirTextDiv>{l10n.sipor.taktsirText}</TaktsirTextDiv>
      </TaktsirDiv> */}
      <TextDiv>{l10n.sipor.text}</TextDiv>
      <HemshehDiv>{l10n.sipor.hemsheh}</HemshehDiv>
      {/* <CreditDiv>{l10n.sipor.credit}</CreditDiv> */}
      <Azarim />
    </SiporBox>
  );
};

export default Sipor;
