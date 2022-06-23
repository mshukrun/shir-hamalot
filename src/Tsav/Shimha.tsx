import React from "react";
import styled from "styled-components";
import { BasicBox, RegularText, TitleDiv } from "../Common";
import BigSmile from "../icons/BigSmile";
import l10n from "./l10n.json";

const ShmitaBox = styled(BasicBox)`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 500px;
  border: 1px solid darkgray;
  border-radius: 8px;
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
      {/* <TitleDiv>{l10n.shimha.title}</TitleDiv> */}
      <TextDiv>{l10n.shimha.bdiha}</TextDiv>
      {/* <IconBox>
        <BigSmile size={40} />
      </IconBox> */}
    </ShmitaBox>
  );
};

export default Shimha;
