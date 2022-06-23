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
  flex-flow: column;
  padding: 5px 32px;
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
  width: 160px;
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

// const AllRowCellDiv = styled(CellDiv)`
//   text-align: right;
//   align-content: flex-end;
//   justify-content: flex-start;
//   width: 480px;
// `;

// const LastLineDiv = styled.div`
//   display: flex;
//   text-align: right;
//   align-items: center;
//   justify-content: flex-start;
//   padding: 8px 30px 0;
//   column-gap: 8px;
// `;

// const TextNoPaddingDiv = styled.div`
//   ${RegularText}
// `;

// const TextDiv = styled.div`
//   ${RegularText}
//   padding: 8px 30px 0;
// `;

const Brahot = () => {
  const lines = l10n.barchot.content.split("||");

  return (
    <BrahotBox dir="RTL">
      <ComplexTitle
        title={l10n.barchot.title}
        subtitle={l10n.barchot.subtitle}
      />
      <TableDiv>
        <RowDiv>
          <HeaderCellDiv></HeaderCellDiv>
          <HeaderCellDiv>{l10n.barchot.first}</HeaderCellDiv>
          <HeaderCellDiv>{l10n.barchot.last}</HeaderCellDiv>
        </RowDiv>
        {lines.map((line) => {
          const cells = line.split("|");
          return (
            <RowDiv key={faker.datatype.uuid()}>
              <Cell3Div>{cells[0]}</Cell3Div>
              <Cell2Div>{cells[1]}</Cell2Div>
              <CellDiv>{cells[2]}</CellDiv>
            </RowDiv>
          );
        })}
      </TableDiv>
      {/* <LastLineDiv>
        <Checked size={18} />
        <TextNoPaddingDiv>{l10n.barchot.shikor_shehacol}</TextNoPaddingDiv>
        <Smile size={18} />
      </LastLineDiv>

      <TextDiv>{l10n.barchot.shikor}</TextDiv> */}
    </BrahotBox>
  );
};

export default Brahot;
