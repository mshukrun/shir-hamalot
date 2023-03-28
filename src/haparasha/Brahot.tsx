import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { BasicBox, RegularPlusText, RegularText } from "../Common";
import ComplexTitle from "../ComplexTitle";
import l10n from "./l10n.json";

const BrahotBox = styled(BasicBox)`
  grid-area: Brahot;
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

const Cell2Div = styled(CellDiv)`
  text-align: center;
  align-content: center;
  justify-content: center;
`;

const HeaderCellDiv = styled(CellDiv)`
  ${RegularPlusText}
  text-align: center;
  align-content: center;
  justify-content: center;
  border: none;
  white-space: nowrap;
`;

const Cell3Div = styled(CellDiv)`
  text-align: right;
  align-content: flex-end;
  justify-content: flex-start;
`;

const TextDiv = styled.div`
  ${RegularPlusText}
  width: 100%;
  padding: 10px 40px;
`;

const Brahot = () => {
  const lines = l10n.barchot.content.split("||");
  const texts = l10n.barchot.comment.split("|");

  return (
    <BrahotBox dir="RTL">
      <ComplexTitle
        title={l10n.barchot.title}
        subtitle={l10n.barchot.subtitle}
      />
      <TableDiv>
        <RowDiv>
          {/* <HeaderCellDiv></HeaderCellDiv> */}
          <HeaderCellDiv>{l10n.barchot.first}</HeaderCellDiv>
          <HeaderCellDiv>{l10n.barchot.last}</HeaderCellDiv>
        </RowDiv>
        {lines.map((line) => {
          const cells = line.split("|");
          return (
            <RowDiv key={faker.datatype.uuid()}>
              <Cell3Div>{cells[0]}</Cell3Div>
              <Cell2Div>{cells[1]}</Cell2Div>
              {/* <CellDiv>{cells[2]}</CellDiv> */}
            </RowDiv>
          );
        })}
      </TableDiv>
      {/* <LastLineDiv>
        <Checked size={18} />
        <TextNoPaddingDiv>{l10n.barchot.shikor_shehacol}</TextNoPaddingDiv>
        <Smile size={18} />
      </LastLineDiv> */}

      {texts.map((text) => (
        <TextDiv key={faker.datatype.uuid()}>{text}</TextDiv>
      ))}
    </BrahotBox>
  );
};

export default Brahot;
