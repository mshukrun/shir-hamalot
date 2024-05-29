import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { BasicBox, RegularText, SubtitleDiv, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const TableBox = styled(BasicBox)`
  position: relative;
`;

const TableDiv = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 5px 10px;
`;

const RowDiv = styled.div`
  display: flex;
  flex-flow: row;
  width: 480px;
  min-height: 60px;
`;

const CellDiv = styled.div`
  display: flex;
  ${RegularText}
  bottom: 12px;
  left: 35px;
  border: 1px solid black;
  width: 240px;
  min-height: 50px;
  text-align: center;
  padding: 8px;
  align-content: center;
  justify-content: center;
  flex-flow: column;
`;

const Cell3Div = styled(CellDiv)`
  text-align: right;
  align-content: flex-end;
  justify-content: flex-start;
`;

const CreditDiv = styled.div`
  position: absolute;
  ${RegularText}
  bottom: 10px;
  left: 25px;
`;

const OtherTable: React.FC<{
  num: number;
  gridArea: string;
}> = ({ num, gridArea }) => {
  // @ts-ignore
  const title = l10n.other?.["title" + num];
  // @ts-ignore
  const subtitle = l10n.other?.["subtitle" + num];
  // @ts-ignore
  const headers = l10n.other?.["header" + num].split("|");
  // @ts-ignore
  const lines = l10n.other?.["content" + num].split("||");
  // @ts-ignore
  const credit = l10n.other?.["credit" + num];

  return (
    <TableBox dir="RTL" style={{ gridArea: gridArea }}>
      <TitleDiv>{title}</TitleDiv>
      {subtitle && <SubtitleDiv>{subtitle}</SubtitleDiv>}
      <TableDiv>
        <RowDiv>
          {headers.map((header: string) => {
            return <Cell3Div key={faker.datatype.uuid()}>{header}</Cell3Div>;
          })}
        </RowDiv>
        {lines.map((line: string) => {
          const cells = line.split("|");
          return (
            <RowDiv key={faker.datatype.uuid()}>
              {headers.map((_: string, index: number) => {
                return (
                  <Cell3Div key={faker.datatype.uuid()}>
                    {cells[index]}
                  </Cell3Div>
                );
              })}
            </RowDiv>
          );
        })}
      </TableDiv>
      {credit && <CreditDiv>{credit}</CreditDiv>}
    </TableBox>
  );
};

export default OtherTable;
