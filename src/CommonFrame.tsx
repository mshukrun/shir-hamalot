import React from "react";
import styled from "styled-components";
import { BasicBox, RegularPlusText, SubTitleText } from "./Common";

const FrameBox = styled.div`
  position: relative;
  padding-top: 8px;
  padding-left: 8px;
  display: flex;
  position: relative;
  flex-flow: column;
  justify-content: flex-start;
`;

const InnerFrameBox = styled(BasicBox)<{
  isCenter: boolean;
}>`
  position: relative;
  padding-top: ${({ isCenter }) => (isCenter ? 40 : 10)}px;
`;

const TitleDiv = styled.div`
  font-family: "GveretLevin";
  font-weight: 800;
  font-size: 28px;
  line-height: 28px;
  border: 6px solid #172c51;
  border-radius: 4px;
  position: absolute;
  top: 24px;
  left: 0px;
  transform: rotate(340deg);
  padding: 8px;
  background: #fff;
`;

const SubtitleDiv = styled.div`
  ${SubTitleText}
  margin: 30px auto 10px;
  text-align: center;
  padding: 0 10px;
`;

const TextDiv = styled.div<{
  isFirst: boolean;
}>`
  ${RegularPlusText}
  padding: ${({ isFirst }) =>
    isFirst ? "10px 30px 10px 170px" : "8px 30px 10px"};
`;

const CenterTextDiv = styled.div`
  ${RegularPlusText}
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
`;

interface CommonFrameProps {
  title: string;
  subtitle?: string;
  content: string;
  isCenter?: boolean;
  gridArea: string;
  children: React.ReactNode;
}

const CommonFrame: React.FC<CommonFrameProps> = ({
  title,
  subtitle,
  content,
  isCenter = false,
  gridArea,
  children,
}) => {
  const texts = content.split("|");
  return (
    <FrameBox style={{ gridArea: gridArea }} dir="RTL">
      <InnerFrameBox isCenter={isCenter}>
        {subtitle && <SubtitleDiv>{subtitle}</SubtitleDiv>}
        {texts.map((text, index) =>
          isCenter ? (
            <CenterTextDiv key={`text_${index}`}>{text}</CenterTextDiv>
          ) : (
            <TextDiv key={`text_${index}`} isFirst={!subtitle && index === 0}>
              {text}
            </TextDiv>
          )
        )}
        {children}
      </InnerFrameBox>
      <TitleDiv>{title}</TitleDiv>
    </FrameBox>
  );
};

export default CommonFrame;
