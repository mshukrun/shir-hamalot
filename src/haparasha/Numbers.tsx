import React from "react";
import styled from "styled-components";
import { BasicBox, RegularText } from "../Common";
import ComplexTitle from "../ComplexTitle";
import l10n from "./l10n.json";

const NumbersBox = styled(BasicBox)`
  grid-area: Numbers;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const TableDiv = styled.div`
  position: absolute;
  font-weight: 400;
  font-size: 22px;
  line-height: 24px;
  bottom: 15px;
  left: 50px;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  td {
    border-top: 1px solid black;
    border-right: 1px solid black;
    width: 50px;
    height: 50px;
  }
`;

const TdDiv = styled.div`
  ${RegularText}
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionsDiv = styled.div`
  ${RegularText}
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 40px;
`;

const QuestionDiv = styled.div`
  ${RegularText}
  padding: 8px 12px;
  border-radius: 12px;
  border: 1px solid black;
`;

const Numbers = () => {
  const questions = l10n.numbers.content.split("|");
  const numbers = l10n.numbers.numbers.split("|");
  return (
    <NumbersBox dir="RTL">
      <ComplexTitle
        title={l10n.numbers.title}
        subtitle={l10n.numbers.subtitle}
      />
      <QuestionsDiv>
        {questions.map((question: string) => {
          return <QuestionDiv>{question}</QuestionDiv>;
        })}
      </QuestionsDiv>
      <TableDiv>
        <table cellSpacing={0} cellPadding={0}>
          <tbody>
            <tr>
              {numbers.map((number: string) => {
                return (
                  <td>
                    <TdDiv>{number}</TdDiv>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </TableDiv>
    </NumbersBox>
  );
};

export default Numbers;
