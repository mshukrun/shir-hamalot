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
  padding: 4px 10px 4px;
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

const OL = styled.div<{
  width?: number;
  height?: number;
  top?: number;
}>`
  position: relative;
  font-weight: 400;
  font-family: "David Libre", serif;
  font-size: 22px;
  line-height: 30px;
  padding: 10px 10px;
  margin-top: ${({ top }) => top || 280}px;
  list-style-type: none;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  height: ${({ height }) => height || 120}px;
  width: ${({ width }) => width || 600}px;
  white-space: normal;
`;

const Vort = () => {
  const texts = l10n.vort.text.split("|");
  return (
    <VortBox dir="RTL">
      <TitleDiv>{l10n.vort.title}</TitleDiv>
      <SubtitleDiv>{l10n.vort.subtitle}</SubtitleDiv>
      <OL width={1300} height={1300} top={-10}>
        {texts.map((text) => (
          <TextDiv key={faker.datatype.uuid()}>{text}</TextDiv>
        ))}
      </OL>

      <GoodShabesDiv>{l10n.vort.goodShabes}</GoodShabesDiv>
      {/* <CreditDiv>{l10n.vort.credit}</CreditDiv> */}
    </VortBox>
  );
};

export default Vort;
