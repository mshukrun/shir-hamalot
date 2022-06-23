import React from "react";
import styled from "styled-components";
import { BasicBox, TitleDiv } from "../Common";
import Havrota from "./Havrota";
import l10n from "./l10n.json";

const MagicBox = styled(BasicBox)`
  grid-area: magic;
  position: relative;
`;

const OL = styled.ol`
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  padding: 5px 195px 10px 0;
`;

const TextDiv = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
`;

const NoteDiv = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 24px;
  padding: 5px 155px 5px 0;
  text-decoration: underline;
`;

const Note1Div = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  padding: 5px 125px 10px 0;
`;

const TableDiv = styled.div`
  position: absolute;
  top: 42px;
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

const Magic = () => {
  return (
    <MagicBox dir="RTL">
      <Havrota />
      <TitleDiv>{l10n.magic.title}</TitleDiv>
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
      </OL>
      <NoteDiv>{l10n.magic.note}</NoteDiv>
      <Note1Div>{l10n.magic.note1}</Note1Div>
      <TableDiv>
        <table cellSpacing={0} cellPadding={0}>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </TableDiv>
    </MagicBox>
  );
};

export default Magic;
