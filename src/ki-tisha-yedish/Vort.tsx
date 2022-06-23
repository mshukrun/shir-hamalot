import React from "react";
import styled from "styled-components";
import { BasicBox, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const VortBox = styled(BasicBox)`
  grid-area: vort;
  position: relative;
`;

const SubtitleDiv = styled.div`
  font-weight: 500;
  font-size: 30px;
  line-height: 34px;
  padding: 8px 30px 0;
`;

const TextDiv = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  padding: 8px 30px 10px;
`;

const GoodShabesDiv = styled.div`
  position: absolute;
  font-weight: 500;
  font-size: 30px;
  line-height: 32px;
  bottom: 12px;
  left: 35px;
  text-decoration: underline;
`;

const Vort = () => {
  return (
    <VortBox dir="RTL">
      <TitleDiv>{l10n.vort.title}</TitleDiv>
      <SubtitleDiv>{l10n.vort.subtitle}</SubtitleDiv>
      <TextDiv>{l10n.vort.text}</TextDiv>
      <GoodShabesDiv>{l10n.vort.goodShabes}</GoodShabesDiv>
    </VortBox>
  );
};

export default Vort;
