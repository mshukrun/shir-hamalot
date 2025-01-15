import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { RegularPlusText, RegularText } from "../Common";
import l10n from "./l10n.json";
import CommonFrame from "../CommonFrame";

const OL = styled.ol`
  ${RegularText}
  padding: 5px 70px 10px;
  list-style-type: none;
`;

const TextDiv = styled.div`
  ${RegularText}
  padding: 5px 0;
`;

const Subtitle = styled.div`
  ${RegularPlusText}
  font-weight: 700;
  padding: 0 40px 10px;
`;

const TableDiv = styled.div<{
  index: number;
}>`
  position: absolute;
  top: 60px;
  right: 300px;
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
  const amount = l10n.magic.amount;
  const squares = new Array(amount).fill(1);
  console.log({ lines, amount, squares });

  const cells = new Array(lines.length / amount).fill(1);

  return (
    <CommonFrame gridArea="Magic" title={l10n.magic.title} content="">
      <Subtitle>{l10n.magic.note1}</Subtitle>

      {squares.map((_, index) => (
        <TableDiv index={index} key={faker.datatype.uuid()}>
          <table cellSpacing={0} cellPadding={0}>
            <tbody>
              {cells.map(() => {
                return (
                  <tr key={faker.datatype.uuid()}>
                    {cells.map(() => {
                      return <td key={faker.datatype.uuid()}></td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TableDiv>
      ))}

      <OL>
        {lines.map((line) => (
          <li key={faker.datatype.uuid()}>
            <TextDiv>{line}</TextDiv>
          </li>
        ))}
      </OL>
    </CommonFrame>
  );
};

export default Magic;
