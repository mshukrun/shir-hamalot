import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { BasicBox, RegularText, SmallText, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const SiporBox = styled(BasicBox)`
  grid-area: Sipor;
  position: relative;
`;

const TaktsirDiv = styled.div`
  ${SmallText}
  font-weight: 600;
  padding: 10px 30px 2px;
`;

const TaktsirTextDiv = styled.div`
  display: inline;
  ${SmallText}
  padding: 0 4px;
`;

const TextDiv = styled.div`
  ${RegularText}
  padding: 10px 30px 10px;
`;

const HemshehDiv = styled.div`
  position: absolute;
  ${RegularText}
  font-weight: 600;
  bottom: 10px;
  left: 35px;
`;

const CreditDiv = styled.div`
  position: absolute;
  ${RegularText}
  bottom: 10px;
  left: 12px;
`;

const Sipor = () => {
  const texts = l10n.sipor.text.split("|");
  const taktsirText = l10n.sipor.taktsirText;
  const credit = l10n.sipor.credit;
  return (
    <SiporBox dir="RTL">
      {/* <Hadash /> */}
      <TitleDiv>{l10n.sipor.title}</TitleDiv>
      {taktsirText && (
        <TaktsirDiv>
          {l10n.sipor.taktsir}
          <TaktsirTextDiv>{l10n.sipor.taktsirText}</TaktsirTextDiv>
        </TaktsirDiv>
      )}
      {texts.map((text) => (
        <TextDiv key={faker.datatype.uuid()}>{text}</TextDiv>
      ))}

      <HemshehDiv>{l10n.sipor.hemsheh}</HemshehDiv>
      {credit && <CreditDiv>{l10n.sipor.credit}</CreditDiv>}
    </SiporBox>
  );
};

export default Sipor;
