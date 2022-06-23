import React from "react";
import styled from "styled-components";
import { BasicBox, RegularText } from "../Common";
import BigSmile from "../icons/BigSmile";
import l10n from "./l10n.json";

const ShmitaBox = styled(BasicBox)`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 550px;
  border: 1px solid darkgray;
  border-radius: 8px;
`;

const TextDiv = styled.div`
  ${RegularText}
  padding: 10px 20px 10px;
`;

const IconBox = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const Shimha2 = () => {
  return (
    <ShmitaBox dir="RTL">
      <TextDiv>{l10n.shimha.note}</TextDiv>
      {/* <IconBox>
        <BigSmile size={30} />
      </IconBox> */}
    </ShmitaBox>
  );
};

export default Shimha2;
