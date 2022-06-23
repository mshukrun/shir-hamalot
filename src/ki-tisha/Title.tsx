import React from "react";
import styled from "styled-components";
import l10n from "./l10n.json";
import AlonNumber from "./AlonNumber";

const TitleBox = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 600px;
`;

const ShirDiv = styled.div`
  position: absolute;
  font-weight: 800;
  font-size: 80px;
  line-height: 84px;
  top: 8px;
  right: 24px;
`;

const HamahalotDiv = styled.div`
  position: absolute;
  font-weight: 800;
  font-size: 80px;
  line-height: 84px;
  top: 40px;
  right: 162px;
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
      <ShirDiv>{l10n.title.shir}</ShirDiv>
      <HamahalotDiv>{l10n.title.hamahalot}</HamahalotDiv>
      <ParashaDiv>{l10n.title.parasha}</ParashaDiv>
    </TitleBox>
  );
};

export default Title;
