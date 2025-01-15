import React from "react";
import styled from "styled-components";
import { BasicBox, SmallText } from "./Common";
import Gniza from "./haparasha/Gniza";

const FrameBox = styled.div`
  position: relative;
  padding-top: 8px;
  padding-left: 8px;
  display: flex;
  position: relative;
  flex-flow: column;
  justify-content: flex-start;
`;

const InnerFrameBox = styled(BasicBox)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterTextDiv = styled.div<{
  fontSize?: number;
}>`
  ${SmallText}
  font-size:${({ fontSize }) => (fontSize ? `${fontSize}px` : undefined)};
  line-height: ${({ fontSize }) =>
    fontSize ? `${fontSize + 2}px` : undefined};
  text-align: center;
`;

interface CommonFrameWithoutTitleProps {
  content: string;
  gridArea: string;
  fontSize?: number;
  gniza?: boolean;
}

const CommonFrameWithoutTitle: React.FC<CommonFrameWithoutTitleProps> = ({
  content,
  gridArea,
  fontSize,
  gniza = false,
}) => {
  const texts = content.split("|");

  return (
    <FrameBox style={{ gridArea: gridArea }} dir="RTL">
      <InnerFrameBox>
        {texts.map((text, index) => (
          <CenterTextDiv key={`text_${index}`} fontSize={fontSize}>
            {text}
          </CenterTextDiv>
        ))}
      </InnerFrameBox>
      {gniza && <Gniza l="-50px" t="100px" />}
    </FrameBox>
  );
};

export default CommonFrameWithoutTitle;
