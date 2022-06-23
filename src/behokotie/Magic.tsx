import React from "react";
import styled from "styled-components";
import { BasicBox, RegularText, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const MagicBox = styled(BasicBox)`
  grid-area: magic;
  position: relative;
`;

const OL = styled.ol`
  ${RegularText}
  padding: 5px 235px 10px 0;
`;

const TextDiv = styled.div`
  ${RegularText}
`;

// const NoteDiv = styled.div`
//   ${RegularText}
//   padding: 5px 155px 5px 0;
//   text-decoration: underline;
// `;

const Note1Div = styled.div`
  ${RegularText}
  padding: 5px 215px 10px 0;
`;

const TableDiv = styled.div`
  position: absolute;
  top: 60px;
  right: 30px;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  td {
    border-top: 1px solid black;
    border-right: 1px solid black;
    width: 40px;
    height: 40px;
  }
`;

const Magic = () => {
  return (
    <MagicBox dir="RTL">
      <TitleDiv>{l10n.magic.title}</TitleDiv>
      <Note1Div>{l10n.magic.note1}</Note1Div>
      <OL>
        <li>
          <TextDiv>{l10n.magic.first}</TextDiv>
        </li>
        <li>
          <TextDiv>{l10n.magic.second}</TextDiv>
        </li>
        <li>
          <TextDiv>{l10n.magic.third}</TextDiv>
        </li>
        {/* <li>
          <TextDiv>{l10n.magic.four}</TextDiv>
        </li> */}
      </OL>

      <TableDiv>
        <table cellSpacing={0} cellPadding={0}>
          <tbody>
            {[1, 1, 1].map(() => {
              return (
                <tr>
                  {[1, 1, 1].map(() => {
                    return <td></td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableDiv>
    </MagicBox>
  );
};

export default Magic;
