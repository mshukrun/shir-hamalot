import React from "react";
import styled from "styled-components";
import { BasicBox, SmallText } from "../Common";

import l10n from "./l10n.json";

const ShmitaBox = styled(BasicBox)`
  position: absolute;
  bottom: 10px;
  right: 30px;
  width: 500px;
`;

const TitleTextDiv = styled.div`
  ${SmallText}
  padding: 5px;
  font-weight: 700;
  text-decoration: underline;
`;

const TextDiv = styled.div`
  ${SmallText}
  padding: 5px;
`;

const Note = () => {
  return (
    <ShmitaBox dir="RTL">
      <TitleTextDiv>{l10n.shimha.simoLev}</TitleTextDiv>
      <TextDiv>{l10n.shimha.note1}</TextDiv>
    </ShmitaBox>
  );
};

export default Note;
