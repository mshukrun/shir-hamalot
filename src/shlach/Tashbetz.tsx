import React from "react";
import styled from "styled-components";
import { BasicBox, RegularText, SmallText, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const TashbetzBox = styled(BasicBox)`
  grid-area: Tashbetz;
  position: relative;
`;

const OL = styled.ol`
  ${RegularText}
  padding: 5px 60px 10px 0;
  list-style-type: none;
`;

const TextDiv = styled.div`
  ${RegularText}
  margin-bottom: 4px;
`;
const UnderlineTextDiv = styled.div`
  ${RegularText}
  margin-bottom: 4px;
  text-decoration: underline;
`;

const TdDiv = styled.div`
  -webkit-print-color-adjust: exact;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  ${SmallText}
  padding: 4px;
  width: 100%;
  height: 100%;
`;

const BlackCell = styled.div`
  -webkit-print-color-adjust: exact;
  background-color: darkgray;
  width: 100%;
  height: 100%;
`;

const WhiteCell = styled.div`
  -webkit-print-color-adjust: exact;
  background-color: white;
  width: 100%;
  height: 100%;
`;

const TableDiv = styled.div`
  -webkit-print-color-adjust: exact;
  position: absolute;
  ${RegularText}
  top: 100px;
  left: 60px;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  tr {
    -webkit-print-color-adjust: exact;
  }
  td {
    -webkit-print-color-adjust: exact;
    border-top: 1px solid black;
    border-right: 1px solid black;
    width: 60px;
    height: 60px;
  }
`;

const Tashbetz = () => {
  const riddles = l10n.tashbetz?.riddles;
  const riddlesArr: string[] = riddles.split("||");
  const rows: string[] = riddlesArr[0].split("|");
  const columns: string[] = riddlesArr[1].split("|");

  const shapes = l10n.tashbetz?.shapes;
  const shapesArr: string[] = shapes.split("|");

  return (
    <TashbetzBox dir="RTL">
      <TitleDiv>{l10n.tashbetz.title}</TitleDiv>
      <TableDiv>
        <table cellSpacing={0} cellPadding={0}>
          <tbody>
            {shapesArr.map((shape: string) => {
              const cells = shape.split(",");
              return (
                <tr>
                  {cells.map((cell: string) => {
                    return (
                      <td>
                        {cell === "-1" ? (
                          <BlackCell />
                        ) : cell === "0" ? (
                          <WhiteCell />
                        ) : (
                          <TdDiv>{cell}</TdDiv>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableDiv>
      <OL>
        <li>
          <UnderlineTextDiv>{l10n.tashbetz?.row}</UnderlineTextDiv>
        </li>
        {rows.map((row) => {
          return (
            <li>
              <TextDiv>{row}</TextDiv>
            </li>
          );
        })}
        <li>
          <UnderlineTextDiv>{l10n.tashbetz?.column}</UnderlineTextDiv>
        </li>
        {columns.map((column) => {
          return (
            <li>
              <TextDiv>{column}</TextDiv>
            </li>
          );
        })}
      </OL>
    </TashbetzBox>
  );
};

export default Tashbetz;
