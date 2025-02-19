import React, { Fragment } from "react";
import l10n from "./l10n.json";
import CommonFrame from "../CommonFrame";
import styled from "styled-components";
import { SmallText } from "../Common";

const TextBox = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  padding: 4px 30px 4px;
  gap: 4px;
`;

const TextDiv = styled.span`
  ${SmallText}
`;

const TitleDiv = styled(TextDiv)`
  font-weight: 700;
  white-space: nowrap;
  min-width: 80px;
`;

const RashiText = styled(TextDiv)`
  font-family: "Noto Rashi Hebrew", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const Pitaron: React.FC = () => {
  const texts = l10n.pitaron.content.split("|");
  return (
    <CommonFrame gridArea="Pitaron" title={l10n.pitaron.title} content="">
      {texts.map((text, index) => {
        const segemnts = text.split(":");
        return (
          <TextBox key={`text_${index}`}>
            <TitleDiv>{`${segemnts[0]}:`}</TitleDiv>
            <RashiText>{segemnts[1]}</RashiText>
          </TextBox>
        );
      })}
    </CommonFrame>
  );
};

export default Pitaron;
