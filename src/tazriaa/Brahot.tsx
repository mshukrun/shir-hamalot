import React from "react";
import styled from "styled-components";
import { BasicBox, RegularPlusText, RegularText } from "../Common";
import ComplexTitle from "../ComplexTitle";
import l10n from "./l10n.json";

const BrahotBox = styled(BasicBox)`
  grid-area: brahot;
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

// const InnerCellDiv = styled.div`
//   display: flex;
//   text-align: center;
//   align-items: flex-end;
//   justify-content: flex-start;
//   flex-flow: row;
// `;

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

const AllRowCellDiv = styled(CellDiv)`
  text-align: right;
  align-content: flex-end;
  justify-content: flex-start;
  width: 480px;
`;

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
          <Cell3Div>{l10n.barchot.food1}</Cell3Div>
          <Cell2Div>{l10n.barchot.adama}</Cell2Div>
          <CellDiv>{l10n.barchot.nefashot}</CellDiv>
        </RowDiv>
        <RowDiv>
          <Cell3Div>{l10n.barchot.food2}</Cell3Div>
          <Cell2Div>{l10n.barchot.shehachol}</Cell2Div>
          <CellDiv>{l10n.barchot.nefashot}</CellDiv>
        </RowDiv>
        <RowDiv>
          <Cell3Div>{l10n.barchot.food3}</Cell3Div>
          <Cell2Div>{l10n.barchot.shehachol}</Cell2Div>
          <CellDiv>{l10n.barchot.questionMark}</CellDiv>
        </RowDiv>
        <RowDiv>
          <Cell3Div>{l10n.barchot.food4}</Cell3Div>
          <Cell2Div>{l10n.barchot.shehachol}</Cell2Div>
          <CellDiv>{l10n.barchot.nefashot}</CellDiv>
        </RowDiv>
        <RowDiv>
          <Cell3Div>{l10n.barchot.food5}</Cell3Div>
          <Cell2Div>{l10n.barchot.questionMark}</Cell2Div>
          <CellDiv>{l10n.barchot.nefashot}</CellDiv>
        </RowDiv>
        <RowDiv>
          <Cell3Div>{l10n.barchot.food7}</Cell3Div>
          <Cell2Div>{l10n.barchot.shehachol}</Cell2Div>
          <CellDiv>{l10n.barchot.nefashot}</CellDiv>
        </RowDiv>
        <RowDiv>
          <AllRowCellDiv>{l10n.barchot.food6}</AllRowCellDiv>
        </RowDiv>
        <RowDiv>
          <Cell3Div>{l10n.barchot.ashkenaz}</Cell3Div>
          <Cell2Div>{l10n.barchot.hamosti}</Cell2Div>
          <CellDiv>{l10n.barchot.birkat}</CellDiv>
        </RowDiv>
        <RowDiv>
          <Cell3Div>{l10n.barchot.sfarad}</Cell3Div>
          <Cell2Div>{l10n.barchot.mezonot}</Cell2Div>
          <CellDiv>{l10n.barchot.mihya}</CellDiv>
        </RowDiv>
        <RowDiv>
          <Cell3Div>{l10n.barchot.sehoda}</Cell3Div>
          <Cell2Div>{l10n.barchot.hamosti}</Cell2Div>
          <CellDiv>{l10n.barchot.birkat}</CellDiv>
        </RowDiv>
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
