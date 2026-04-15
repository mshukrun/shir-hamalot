import React from "react";
import styled from "styled-components";
import { RegularText } from "../Common";
import l10n from "./l10n.json";
import CommonFrame from "../CommonFrame";

const CreditDiv = styled.div`
  position: absolute;
  ${RegularText}
  bottom: 10px;
  left: 25px;
`;

const OtherLines: React.FC<{
  num: number;
  gridArea: string;
  isCenter?: boolean;
  padding?: number;
}> = ({ num, gridArea, isCenter, padding }) => {
  // @ts-ignore
  const title = l10n.other?.["title" + num];
  // @ts-ignore
  const subtitle = l10n.other?.["subtitle" + num];
  // @ts-ignore
  const content = l10n.other?.["content" + num];
  // @ts-ignore
  const credit = l10n.other?.["credit" + num];

  return (
    <CommonFrame
      gridArea={gridArea}
      title={title}
      subtitle={subtitle}
      content={content}
      isCenter={isCenter}
      padding={padding}
    >
      {credit && <CreditDiv>{credit}</CreditDiv>}
    </CommonFrame>
  );
};

export default OtherLines;
