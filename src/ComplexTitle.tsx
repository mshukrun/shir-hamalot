import React from "react";
import styled from "styled-components";
import { SubTitleText, TitleText } from "./Common";

const TitleWithSubtitleDiv = styled.div`
  display: flex;
  column-gap: 16px;
  margin: 10px auto;
`;

const TitleDiv = styled.div`
  ${TitleText}
`;

const SubtitleDiv = styled.div`
  ${SubTitleText}
`;

interface ComplexTitleProps {
  title: string;
  subtitle: string;
}

const ComplexTitle: React.FC<ComplexTitleProps> = ({ title, subtitle }) => {
  return (
    <TitleWithSubtitleDiv>
      <TitleDiv>{title}</TitleDiv>
      <SubtitleDiv>{subtitle}</SubtitleDiv>
    </TitleWithSubtitleDiv>
  );
};

export default ComplexTitle;
