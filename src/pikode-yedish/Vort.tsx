import React from "react";
import styled from "styled-components";
import { BasicBox, MediumText, RegularText, TitleDiv } from "../Common";
import Heart from "../icons/Heart";
import SimanKriha from "../icons/SimanKriha";
import l10n from "./l10n.json";

const VortBox = styled(BasicBox)`
  grid-area: vort;
  position: relative;
`;

const SubtitleDiv = styled.div`
  ${MediumText}
  padding: 8px 30px 0;
`;

const TextDiv = styled.div`
  ${RegularText}
  padding: 8px 30px 10px;
`;

const TextIconsDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
  ${RegularText}
  padding: 8px 30px 10px;
`;

const UnderlineTextDiv = styled.div`
  ${RegularText}
  padding: 8px 30px 0;
  text-decoration: underline;
`;

const ListTextDiv = styled.div`
  ${RegularText}
  padding: 0 30px;
`;

const OL = styled.ol`
  ${RegularText}
  padding: 10px 40px 10px;
`;

const GoodShabesDiv = styled.div`
  position: absolute;
  ${MediumText}
  bottom: 12px;
  left: 35px;
  text-decoration: underline;
`;

const Vort = () => {
  return (
    <VortBox dir="RTL">
      <TitleDiv>{l10n.vort.title}</TitleDiv>
      <SubtitleDiv>{l10n.vort.subtitle}</SubtitleDiv>
      <TextIconsDiv>
        {l10n.vort.etzot}
        <Heart size={18} />
        <SimanKriha size={18} />
      </TextIconsDiv>
      <OL>
        <li>
          <ListTextDiv>{l10n.vort.etza1}</ListTextDiv>
        </li>
        <li>
          <ListTextDiv>{l10n.vort.etza2}</ListTextDiv>
        </li>
        <li>
          <ListTextDiv>{l10n.vort.etza3}</ListTextDiv>
        </li>
        <li>
          <ListTextDiv>{l10n.vort.etza4}</ListTextDiv>
        </li>
      </OL>
      <UnderlineTextDiv>{l10n.vort.parasha}</UnderlineTextDiv>
      <TextDiv>{l10n.vort.text}</TextDiv>
      <GoodShabesDiv>{l10n.vort.goodShabes}</GoodShabesDiv>
    </VortBox>
  );
};

export default Vort;
