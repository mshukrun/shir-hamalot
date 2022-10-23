import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { BasicBox, RegularText, SmallText, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const SiporBox = styled(BasicBox)`
  grid-area: Bad;
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
  bottom: 45px;
  left: 35px;
`;

const CreditDiv = styled.div`
  position: absolute;
  ${RegularText}
  bottom: 10px;
  left: 12px;
`;

const Bad = () => {
  const texts = l10n.badSong.text.split("|");
  const taktsirText = l10n.badSong.taktsirText;
  const credit = l10n.badSong.credit;
  return (
    <SiporBox dir="RTL">
      {/* <Hadash /> */}
      <TitleDiv>{l10n.badSong.title}</TitleDiv>
      {taktsirText && (
        <TaktsirDiv>
          {l10n.badSong.taktsir}
          <TaktsirTextDiv>{l10n.badSong.taktsirText}</TaktsirTextDiv>
        </TaktsirDiv>
      )}
      {texts.map((text) => (
        <TextDiv key={faker.datatype.uuid()}>{text}</TextDiv>
      ))}

      <HemshehDiv>{l10n.badSong.hemsheh}</HemshehDiv>
      {credit && <CreditDiv>{l10n.badSong.credit}</CreditDiv>}
    </SiporBox>
  );
};

export default Bad;
