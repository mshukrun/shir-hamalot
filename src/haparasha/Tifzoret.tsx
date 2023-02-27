import React from "react";
import styled from "styled-components";
import { BasicBox, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const TifzoretBox = styled(BasicBox)`
  grid-area: Tifzoret;
  position: relative;
`;

const OL = styled.div`
  position: relative;
  font-weight: 400;
  font-family: "David Libre", serif;
  font-size: 24px;
  line-height: 30px;
  padding: 10px 40px;
  margin-top: 150px;
  list-style-type: none;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  height: 120px;
  width: 600px;
  white-space: normal;
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
  font-size: 24px;
  line-height: 26px;
  top: 80px;
  left: 80px;
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
  const milim = l10n.tifzoret?.milim;
  const milaArr: string[] = milim.split("|");

  const shorot = l10n.tifzoret?.shorot;
  const shoraArr: string[] = shorot.split("|");

  return (
    <TifzoretBox dir="RTL">
      <TitleDiv>{l10n.tifzoret.title}</TitleDiv>
      <OL>
        {milaArr.map((mila) => {
          return <TextDiv>{mila}</TextDiv>;
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
    </TifzoretBox>
  );
};

export default Tifzoret;
