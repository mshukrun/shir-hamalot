import React from "react";
import styled from "styled-components";
import { BasicBox, RegularText, SmallText } from "../Common";

import l10n from "./l10n.json";

const ShmitaBox = styled(BasicBox)`
  position: absolute;
  top: 190px;
  right: 30px;
  width: 570px;
`;

const TextDiv = styled.div`
  ${SmallText}
  padding: 5px;
`;

const Azarim = () => {
  return (
    <ShmitaBox dir="RTL">
      <TextDiv>{l10n.shimha.note}</TextDiv>
    </ShmitaBox>
  );
};

export default Azarim;
