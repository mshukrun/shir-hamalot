import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { BasicBox, RegularText, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const YaheBox = styled(BasicBox)`
  grid-area: Yahe;
  position: relative;
`;

const OL = styled.ol`
  ${RegularText}
  padding: 10px 45px 10px;
  list-style: none;
`;

const TextDiv = styled.div`
  ${RegularText}
  text-align: right;
`;

const CreditDiv = styled.div`
  position: absolute;
  ${RegularText}
  bottom: 12px;
  left: 35px;
  text-decoration: underline;
`;

const Yahe = () => {
  const texts = l10n.yahe.content.split("|");
  return (
    <YaheBox dir="RTL">
      <TitleDiv>{l10n.yahe.title}</TitleDiv>
      <OL>
        {texts.map((text) => (
          <li key={faker.datatype.uuid()}>
            <TextDiv>{text}</TextDiv>
          </li>
        ))}
      </OL>
      <CreditDiv>{l10n.yahe.credit}</CreditDiv>
    </YaheBox>
  );
};

export default Yahe;
