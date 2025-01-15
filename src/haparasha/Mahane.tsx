import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { RegularPlusText, RegularText } from "../Common";
import l10n from "./l10n.json";
import CommonFrame from "../CommonFrame";

const OL = styled.ol`
  ${RegularPlusText}
  padding: 10px 40px 10px;
`;

const OLInner = styled.ol`
  ${RegularPlusText}
  padding-right: 30px;
  list-style: hebrew;
`;

const TextDiv = styled.div`
  ${RegularPlusText}
  padding: 2px 0;
`;

const BoldTextDiv = styled(TextDiv)`
  font-weight: 700;
`;

const Subtitle = styled(BoldTextDiv)`
  padding: 10px 40px 10px;
`;

const CreditDiv = styled.div`
  position: absolute;
  ${RegularText}
  bottom: 10px;
  left: 25px;
  text-decoration: underline;
`;

const Mahane = () => {
  const questions = l10n.mahane.content.split("||");
  return (
    <CommonFrame gridArea="Mahane" title={l10n.mahane.title} content="">
      <Subtitle>{l10n.mahane.subtitle}</Subtitle>
      <OL>
        {questions.map((question) => {
          const answers = question.split("|");
          return (
            <li key={faker.datatype.uuid()}>
              <BoldTextDiv>{answers[0]}</BoldTextDiv>
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
    </CommonFrame>
  );
};

export default Mahane;
