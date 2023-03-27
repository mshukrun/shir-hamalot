import React from "react";
import styled from "styled-components";
import { BasicBox, TitleDiv, RegularPlusText } from "../Common";
import l10n from "./l10n.json";

const FindWordsBox = styled(BasicBox)`
  grid-area: FindWords;
  position: relative;
`;

const TextDiv = styled.div`
  ${RegularPlusText}
  width: 500px;
  padding: 10px 40px;
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
  top: 200px;
  left: 140px;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  td {
    border-top: 1px solid black;
    border-right: 1px solid black;
    width: 37px;
    height: 37px;
  }
`;

const FindWords = () => {
  const shorot = l10n.other?.content1;
  const shoraArr: string[] = shorot.split("|");

  return (
    <FindWordsBox dir="RTL">
      <TitleDiv>{l10n.other?.title1}</TitleDiv>
      <TextDiv>{l10n.other?.subtitle1}</TextDiv>

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
    </FindWordsBox>
  );
};

export default FindWords;
