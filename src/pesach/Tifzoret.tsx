import React from "react";
import styled from "styled-components";
import { BasicBox, TitleDiv } from "../Common";
import l10n from "./l10n.json";
import Pitaron from "./Pitaron";
import Shimha from "./Shimha";

const TifzoretBox = styled(BasicBox)`
  grid-area: tifzoret;
  position: relative;
`;

const OL = styled.ol`
  font-weight: 400;
  font-family: "David Libre", serif;
  font-size: 24px;
  line-height: 30px;
  padding: 5px 40px 10px;
  list-style-type: none;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  max-height: 300px;
  max-width: 250px;
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
  top: 80px;
  right: 220px;
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
  for (let index = 0; index < 18; index++) {
    // @ts-ignore
    const mila = l10n.tifzoret?.[`mila${index}`];
    mila && milaArr.push(mila);
  }

  const shoraArr: string[] = [];
  for (let index = 0; index < 10; index++) {
    // @ts-ignore
    const shora = l10n.tifzoret?.[`shora${index}`];
    shora && shoraArr.push(shora);
  }

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
                  {Array.from(shora.replaceAll(" ", "")).map((word: string) => {
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
      <Pitaron />
    </TifzoretBox>
  );
};

export default Tifzoret;
