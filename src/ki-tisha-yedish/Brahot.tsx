import React from "react";
import styled from "styled-components";
import { BasicBox } from "../Common";
import ComplexTitle from "../ComplexTitle";
import l10n from "./l10n.json";

const BrahotBox = styled(BasicBox)`
  grid-area: brahot;
  position: relative;
`;

const TableDiv = styled.div`
  display: flex;
  flex-flow: column;
  padding: 10px 32px;
`;

const RowDiv = styled.div`
  display: flex;
  flex-flow: row;
  width: 450px;
`;

const CellDiv = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  bottom: 12px;
  left: 35px;
  border: 1px solid black;
  width: 150px;
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
  font-weight: 500;
  font-size: 22px;
  line-height: 34px;
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

const Brahot = () => {
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
        <RowDiv>
          <Cell3Div>{l10n.barchot.dohan}</Cell3Div>
          <Cell2Div>{l10n.barchot.adama}</Cell2Div>
          <CellDiv>{l10n.barchot.nefashot}</CellDiv>
        </RowDiv>
        <RowDiv>
          <Cell3Div>{l10n.barchot.kemah_dohan}</Cell3Div>
          <Cell2Div>{l10n.barchot.shehachol}</Cell2Div>
          <CellDiv>{l10n.barchot.questionMark}</CellDiv>
        </RowDiv>
        <RowDiv>
          <Cell3Div>
            <div>{l10n.barchot.orez}</div>
            <div>{l10n.barchot.raka}</div>
          </Cell3Div>
          <Cell2Div>{l10n.barchot.shehachol}</Cell2Div>
          <CellDiv>{l10n.barchot.questionMark}</CellDiv>
        </RowDiv>
        <RowDiv>
          <Cell3Div>
            {l10n.barchot.orez}
            {l10n.barchot.smiha}
          </Cell3Div>
          <Cell2Div>{l10n.barchot.mezonot}</Cell2Div>
          <CellDiv>{l10n.barchot.questionMark}</CellDiv>
        </RowDiv>
        <RowDiv>
          <Cell3Div>
            <div>{l10n.barchot.solet}</div>
            <div>{l10n.barchot.raka}</div>
          </Cell3Div>
          <Cell2Div>{l10n.barchot.questionMark}</Cell2Div>
          <CellDiv>{l10n.barchot.questionMark}</CellDiv>
        </RowDiv>
        <RowDiv>
          <Cell3Div>
            {l10n.barchot.solet}
            {l10n.barchot.smiha}
          </Cell3Div>
          <Cell2Div>{l10n.barchot.mezonot}</Cell2Div>
          <CellDiv>{l10n.barchot.mihya}</CellDiv>
        </RowDiv>
      </TableDiv>
    </BrahotBox>
  );
};

export default Brahot;
