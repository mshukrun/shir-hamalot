import React from "react";
import styled from "styled-components";
import {
  BasicBox,
  RegularText,
  SmallText,
  TinyPlusText,
  TinyText,
  TitleDiv,
} from "../Common";
import BigSmile from "../icons/BigSmile";
import l10n from "./l10n.json";

const ShmitaBox = styled(BasicBox)`
  position: absolute;
  top: 50px;
  left: 40px;
  width: 210px;
`;

const TitleTextDiv = styled.div`
  ${SmallText}
  width: 100%;
  font-weight: 700;
  text-align: center;
`;

const TextDiv = styled.div`
  ${TinyPlusText}
  padding: 5px;
`;

const IconBox = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
`;

const Shimha = () => {
  return (
    <ShmitaBox dir="RTL">
      <TitleTextDiv>{l10n.shimha.title}</TitleTextDiv>
      <TextDiv>{l10n.shimha.bdiha}</TextDiv>
      <IconBox>
        <BigSmile size={18} />
      </IconBox>
    </ShmitaBox>
  );
};

export default Shimha;
