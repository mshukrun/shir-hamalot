import React from "react";
import styled from "styled-components";
import { BasicBox, MediumText, RegularText, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const TashbetzBox = styled(BasicBox)`
  grid-area: Sodoko;
  position: relative;
`;

const TextDiv = styled.div`
  ${RegularText}
  margin: 10px auto;
  padding: 0 20px;
`;

const TdDiv = styled.div`
  -webkit-print-color-adjust: exact;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  ${MediumText}
  padding: 10px 15px;
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
  top: 130px;
  left: 120px;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  tr {
    -webkit-print-color-adjust: exact;
  }
  td {
    -webkit-print-color-adjust: exact;
    border-top: 1px solid black;
    border-right: 1px solid black;
    width: 50px;
    height: 50px;
  }
`;

const Sodoko = () => {
  const shapes = l10n.sodoko?.shapes;
  const shapesArr: string[] = shapes.split("|");

  return (
    <TashbetzBox dir="RTL">
      <TitleDiv>{l10n.sodoko.title}</TitleDiv>
      <TextDiv>{l10n.sodoko.note}</TextDiv>
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
    </TashbetzBox>
  );
};

export default Sodoko;
