import React from "react";
import styled from "styled-components";
import { BasicBox, TitleDiv } from "../Common";
import Havrota from "./Havrota";
import l10n from "./l10n.json";

const TifzoretBox = styled(BasicBox)`
  grid-area: tifzoret;
  position: relative;
`;

const OL = styled.ol`
  font-weight: 400;
  font-family: "David Libre", serif;
  font-size: 24px;
  line-height: 30px;
  padding: 5px 325px 10px 0;
`;

const TextDiv = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
`;

const TdDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TableDiv = styled.div`
  position: absolute;
  font-weight: 400;
  font-size: 22px;
  line-height: 24px;
  top: 50px;
  right: 20px;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  td {
    border-top: 1px solid black;
    border-right: 1px solid black;
    width: 40px;
    height: 40px;
  }
`;

const Tifzoret = () => {
  const milaArr: string[] = [];
  for (let index = 0; index < 10; index++) {
    // @ts-ignore
    const mila = l10n.tifzoret?.[`mila${index}`];
    mila && milaArr.push(mila);
  }

  console.log(milaArr);

  const shoraArr: string[] = [];
  for (let index = 0; index < 10; index++) {
    // @ts-ignore
    const shora = l10n.tifzoret?.[`shora${index}`];
    shora && shoraArr.push(shora);
  }

  console.log(shoraArr);

  return (
    <TifzoretBox dir="RTL">
      <TitleDiv>{l10n.tifzoret.title}</TitleDiv>
      <OL>
        {milaArr.map((mila) => {
          return (
            <li>
              <TextDiv>{mila}</TextDiv>
            </li>
          );
        })}
      </OL>
      <TableDiv>
        <table cellSpacing={0} cellPadding={0}>
          <tbody>
            {shoraArr.map((shora: string) => {
              return (
                <tr>
                  {Array.from(shora).map((word: string) => {
                    return (
                      <td>
                        <TdDiv>{word}</TdDiv>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableDiv>
    </TifzoretBox>
  );
};

export default Tifzoret;
