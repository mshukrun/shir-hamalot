import React from "react";
import styled from "styled-components";
import { BasicBox, RegularText, SmallText, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const TashbetzBox = styled(BasicBox)`
  grid-area: tashbetz;
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
  position: absolute;
  ${RegularText}
  top: 100px;
  left: 60px;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  td {
    border-top: 1px solid black;
    border-right: 1px solid black;
    width: 60px;
    height: 60px;
  }
`;

const Tashbetz = () => {
  const milaArr: string[] = [];
  for (let index = 0; index < 13; index++) {
    // @ts-ignore
    const mila = l10n.tifzoret?.[`mila${index}`];
    mila && milaArr.push(mila);
  }

  console.log(milaArr);

  const shoraArr: string[] = [];
  shoraArr.push("1,2,3,-1,4,5");
  shoraArr.push("6,0,0,7,-1,0");
  shoraArr.push("8,0,0,0,9,0");
  shoraArr.push("-1,-1,10,0,0,0");

  console.log(shoraArr);

  return (
    <TashbetzBox dir="RTL">
      <TitleDiv>{l10n.tifzoret.title}</TitleDiv>
      <TableDiv>
        <table cellSpacing={0} cellPadding={0}>
          <tbody>
            {shoraArr.map((shora: string) => {
              const cells = shora.split(",");
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
        {milaArr.map((mila, index) => {
          return (
            <li>
              {index === 0 || index === 6 ? (
                <UnderlineTextDiv>{mila}</UnderlineTextDiv>
              ) : (
                <TextDiv>{mila}</TextDiv>
              )}
            </li>
          );
        })}
      </OL>
    </TashbetzBox>
  );
};

export default Tashbetz;
