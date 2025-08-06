import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { RegularPlusText, RegularText } from "../Common";
import l10n from "./l10n.json";
import CommonFrame from "../CommonFrame";

const TextDiv = styled.div`
  ${RegularPlusText}
  padding: 4px 10px 4px;
`;

const OL = styled.div<{
  width?: number;
  height?: number;
  top?: number;
}>`
  position: relative;
  font-weight: 400;
  font-family: "David Libre", serif;
  font-size: 22px;
  line-height: 30px;
  padding: 10px 10px;
  margin-top: ${({ top }) => top || 280}px;
  list-style-type: none;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  height: ${({ height }) => height || 120}px;
  width: ${({ width }) => width || 600}px;
  white-space: normal;
`;

const CreditDiv = styled.div`
  position: absolute;
  ${RegularText}
  bottom: 24px;
  left: 0;
  padding: 16px;
`;

const OtherShir: React.FC<{
  num: number;
  gridArea: string;
  width?: number;
  height?: number;
  top?: number;
}> = ({ num, gridArea, width = 1300, height = 500, top = -10 }) => {
  // @ts-ignore
  const title = l10n.other?.["title" + num];
  // @ts-ignore
  const subtitle = l10n.other?.["subtitle" + num];
  // @ts-ignore
  const texts: string[] = l10n.other?.["content" + num].split("|");
  // @ts-ignore
  const credit = l10n.other?.["credit" + num];
  return (
    <CommonFrame
      gridArea={gridArea}
      title={title}
      subtitle={subtitle}
      content=""
    >
      <OL width={width} height={height} top={top}>
        {texts.map((text) => (
          <TextDiv key={faker.datatype.uuid()}>{text}</TextDiv>
        ))}
      </OL>

      {credit && <CreditDiv>{credit}</CreditDiv>}
    </CommonFrame>
  );
};

export default OtherShir;
