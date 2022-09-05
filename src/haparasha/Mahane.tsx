import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { BasicBox, RegularPlusText, RegularText } from "../Common";
import ComplexTitle from "../ComplexTitle";
import l10n from "./l10n.json";

const MahaneBox = styled(BasicBox)`
  grid-area: Mahane;
  position: relative;
`;

const OL = styled.ol`
  ${RegularPlusText}
  padding: 10px 40px 10px;
`;

const OLInner = styled.ol`
  ${RegularPlusText}
  text-align: right;
  padding-right: 20px;
  list-style: hebrew;
`;

const TextDiv = styled.div`
  ${RegularPlusText}
  top: 58px;
  right: 16px;
  text-align: right;
`;

const CreditDiv = styled.div`
  position: absolute;
  ${RegularText}
  bottom: 30px;
  left: 25px;
  text-decoration: underline;
`;

const Mahane = () => {
  const questions = l10n.mahane.content.split("||");
  return (
    <MahaneBox dir="RTL">
      <ComplexTitle title={l10n.mahane.title} subtitle={l10n.mahane.subtitle} />
      <OL>
        {questions.map((question) => {
          const answers = question.split("|");
          return (
            <li key={faker.datatype.uuid()}>
              <TextDiv>{answers[0]}</TextDiv>
              <OLInner>
                {answers.slice(1).map((answer) => (
                  <li key={faker.datatype.uuid()}>
                    <TextDiv>{answer}</TextDiv>
                  </li>
                ))}
              </OLInner>
            </li>
          );
        })}
      </OL>
      <CreditDiv>{l10n.mahane.credit}</CreditDiv>
    </MahaneBox>
  );
};

export default Mahane;
