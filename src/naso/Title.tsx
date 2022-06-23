import React from "react";
import styled from "styled-components";
import l10n from "./l10n.json";
import AlonNumber from "./AlonNumber";
import Basad from "./Basad";
import { BasicBox, PageNumberDiv } from "../Common";
import NoRead from "./NoRead";

const TitleBox = styled(BasicBox)`
  grid-area: Title;
  position: relative;
  border: none;
`;

const ShirDiv = styled.div`
  position: absolute;
  font-weight: 800;
  font-size: 80px;
  line-height: 84px;
  top: 8px;
  right: 260px;
`;

const HamahalotDiv = styled.div`
  position: absolute;
  font-weight: 800;
  font-size: 80px;
  line-height: 84px;
  top: 40px;
  right: 400px;
`;

const ParashaDiv = styled.div`
  position: absolute;
  font-weight: 600;
  font-size: 44px;
  top: 127px;
  left: 58px;
  color: darkslategrey;
`;

const Title = () => {
  return (
    <TitleBox dir="RTL">
      <AlonNumber />
      <PageNumberDiv>{l10n.title.amod + " -1-"}</PageNumberDiv>
      <ShirDiv>{l10n.title.shir}</ShirDiv>
      <HamahalotDiv>{l10n.title.hamahalot}</HamahalotDiv>
      <ParashaDiv>{l10n.title.parasha}</ParashaDiv>
      <Basad />
      <NoRead />
    </TitleBox>
  );
};

export default Title;
