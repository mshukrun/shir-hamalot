import React from "react";
import styled from "styled-components";
import { BasicBox, MediumText, RegularPlusText, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const VortBox = styled(BasicBox)`
  grid-area: vort;
  position: relative;
`;

// const SubtitleDiv = styled.div`
//   ${MediumText}
//   padding: 8px 30px 0;
// `;

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
  return (
    <VortBox dir="RTL">
      <TitleDiv>{l10n.vort.title}</TitleDiv>
      <TextDiv>{l10n.vort.text}</TextDiv>
      {/* <TextDiv>{l10n.vort.moreText}</TextDiv> */}
      <GoodShabesDiv>{l10n.vort.goodShabes}</GoodShabesDiv>
      {/* <CreditDiv>{l10n.vort.credit}</CreditDiv> */}
    </VortBox>
  );
};

export default Vort;
