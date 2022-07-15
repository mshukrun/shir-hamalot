import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { BasicBox, MediumText, RegularPlusText, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const VortBox = styled(BasicBox)`
  grid-area: Vort;
  position: relative;
`;

const SubtitleDiv = styled.div`
  ${MediumText}
  padding: 8px 30px 0;
`;

const TextDiv = styled.div`
  ${RegularPlusText}
  padding: 8px 30px 10px;
`;

// const TextIconsDiv = styled.div`
//   display: flex;
//   align-items: center;
//   column-gap: 4px;
//   ${RegularText}
//   padding: 8px 30px 10px;
// `;

// const UnderlineTextDiv = styled.div`
//   ${RegularText}
//   padding: 8px 30px 0;
//   text-decoration: underline;
// `;

// const ListTextDiv = styled.div`
//   ${RegularText}
//   padding: 0 30px;
// `;

// const OL = styled.ol`
//   ${RegularText}
//   padding: 10px 40px 10px;
// `;

const GoodShabesDiv = styled.div`
  position: absolute;
  ${MediumText}
  bottom: 12px;
  left: 35px;
  text-decoration: underline;
`;

// const CreditDiv = styled.div`
//   position: absolute;
//   ${RegularText}
//   bottom: 12px;
//   right: 35px;
//   text-decoration: underline;
// `;

const Vort = () => {
  const texts = l10n.vort.text.split("|");
  return (
    <VortBox dir="RTL">
      <TitleDiv>{l10n.vort.title}</TitleDiv>
      <SubtitleDiv>{l10n.vort.subtitle}</SubtitleDiv>
      {texts.map((text) => (
        <TextDiv key={faker.datatype.uuid()}>{text}</TextDiv>
      ))}
      <GoodShabesDiv>{l10n.vort.goodShabes}</GoodShabesDiv>
      {/* <CreditDiv>{l10n.vort.credit}</CreditDiv> */}
    </VortBox>
  );
};

export default Vort;
