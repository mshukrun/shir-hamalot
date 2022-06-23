import React from "react";
import styled from "styled-components";
import { BasicBox, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const ChidaBox = styled(BasicBox)`
  grid-area: chida;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const OL = styled.ol`
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  list-style-type: disc;
  padding: 5px 50px 10px;
`;

const TextDiv = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
`;
const EmptyBox = styled.div`
  position: absolute;
  font-weight: 400;
  font-size: 56px;
  line-height: 48px;
  top: 66px;
  left: 35px;
  width: 180px;
  height: 80px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid black;
  padding: 8px;
`;

const Chida = () => {
  return (
    <ChidaBox dir="RTL">
      <TitleDiv>{l10n.chida.title}</TitleDiv>
      <OL>
        <li>
          <TextDiv>{l10n.chida.first}</TextDiv>
        </li>
        <li>
          <TextDiv>{l10n.chida.second}</TextDiv>
        </li>
        <li>
          <TextDiv>{l10n.chida.third}</TextDiv>
        </li>
        <li>
          <TextDiv>{l10n.chida.four}</TextDiv>
        </li>
      </OL>
      <EmptyBox>?</EmptyBox>
    </ChidaBox>
  );
};

export default Chida;
