import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { BasicBox, RegularText, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const MagicBox = styled(BasicBox)`
  grid-area: Magic;
  position: relative;
`;

const OL = styled.ol`
  ${RegularText}
  padding: 5px 235px 10px 0;
`;

const TextDiv = styled.div`
  ${RegularText}
`;

const Note1Div = styled.div`
  ${RegularText}
  padding: 5px 215px 10px 0;
`;

const TableDiv = styled.div`
  position: absolute;
  top: 80px;
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
  const lines = l10n.magic.content.split("|");
  return (
    <MagicBox dir="RTL">
      <TitleDiv>{l10n.magic.title}</TitleDiv>
      <Note1Div>{l10n.magic.note1}</Note1Div>

      <TableDiv>
        <table cellSpacing={0} cellPadding={0}>
          <tbody>
            {lines.map(() => {
              return (
                <tr key={faker.datatype.uuid()}>
                  {lines.map(() => {
                    return <td key={faker.datatype.uuid()}></td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableDiv>
      <OL>
        {lines.map((line) => (
          <li key={faker.datatype.uuid()}>
            <TextDiv>{line}</TextDiv>
          </li>
        ))}
      </OL>
    </MagicBox>
  );
};

export default Magic;
