import React from "react";
import styled from "styled-components";
import { BasicBox, RegularPlusText, SubtitleDiv, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const OtherBox = styled(BasicBox)`
  position: relative;
`;

const TextDiv = styled.div`
  ${RegularPlusText}
  padding: 8px 16px;
`;

const Other: React.FC<{
  num: number;
  gridArea: string;
  isSubtitle?: boolean;
}> = ({ num, gridArea, isSubtitle = false }) => {
  // @ts-ignore
  const title = l10n.other?.["title" + num];
  // @ts-ignore
  const content = l10n.other?.["content" + num];
  return (
    <OtherBox dir="RTL" style={{ gridArea: gridArea }}>
      {isSubtitle ? (
        <SubtitleDiv>{title}</SubtitleDiv>
      ) : (
        <TitleDiv>{title}</TitleDiv>
      )}
      <TextDiv>{content}</TextDiv>
    </OtherBox>
  );
};

export default Other;
