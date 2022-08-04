import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { BasicBox, RegularText, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const ChidaBox = styled(BasicBox)`
  grid-area: Chida;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const InnerBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 35px;
`;

const OL = styled.ol`
  ${RegularText}
  list-style-type: none;
  padding: 0 20px 10px;
`;

const TextDiv = styled.div`
  ${RegularText}
`;

const EmptyBox = styled.div`
  font-weight: 800;
  font-size: 56px;
  line-height: 48px;
  width: 120px;
  height: 80px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid black;
  padding: 8px;
`;

const CreditDiv = styled.div`
  position: absolute;
  ${RegularText}
  bottom: 8px;
  left: 35px;
  text-decoration: underline;
`;

const Chida = () => {
  const lines = l10n.chida.content.split("|");
  return (
    <ChidaBox dir="RTL">
      <TitleDiv>{l10n.chida.title}</TitleDiv>
      <InnerBox>
        <OL>
          {lines.map((line) => (
            <li key={faker.datatype.uuid()}>
              <TextDiv>{line}</TextDiv>
            </li>
          ))}
        </OL>
        <EmptyBox>?</EmptyBox>
      </InnerBox>

      {l10n.chida.gil && <CreditDiv>{l10n.chida.credit}</CreditDiv>}
    </ChidaBox>
  );
};

export default Chida;
