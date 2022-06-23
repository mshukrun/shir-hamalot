import React from "react";
import styled from "styled-components";
import { BasicBox, RegularText, TitleDiv } from "../Common";
import BigSmile from "../icons/BigSmile";
import l10n from "./l10n.json";

const ShmitaBox = styled(BasicBox)`
  grid-area: shimha;
  position: relative;
`;

const TextDiv = styled.div`
  ${RegularText}
  padding: 20px 30px 10px;
`;

const IconBox = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Shimha = () => {
  return (
    <ShmitaBox dir="RTL">
      <TitleDiv>{l10n.shimha.title}</TitleDiv>
      <TextDiv>{l10n.shimha.bdiha}</TextDiv>
      <IconBox>
        <BigSmile size={40} />
      </IconBox>
    </ShmitaBox>
  );
};

export default Shimha;
