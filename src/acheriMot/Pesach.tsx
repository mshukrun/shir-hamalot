import React from "react";
import styled from "styled-components";
import { BasicBox, RegularPlusText, TitleDiv } from "../Common";
import Havrota from "./Havrota";
import l10n from "./l10n.json";

const ShmitaBox = styled(BasicBox)`
  grid-area: pesach;
  position: relative;
`;

const TextDiv = styled.div`
  ${RegularPlusText}
  padding: 20px 20px 10px;
`;

const Pesach = () => {
  return (
    <ShmitaBox dir="RTL">
      <TitleDiv>{l10n.pesach.title}</TitleDiv>
      <TextDiv>{l10n.pesach.text}</TextDiv>
    </ShmitaBox>
  );
};

export default Pesach;
