import React from "react";
import styled from "styled-components";
import { BasicBox, SubtitleDiv, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const OtherBox = styled(BasicBox)`
  position: relative;
  padding: 0 16px;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  z-index: -1;
`;

const TitleBox = styled.div`
  display: flex;
`;

const ImageBox = styled.img`
  width: 100%;
  height: 100%;
  opacity: 1;
`;

const PageImage: React.FC<{ gridArea: string }> = ({ gridArea }) => {
  return (
    <OtherBox dir="RTL" style={{ gridArea: gridArea }}>
      <TitleBox>
        <SubtitleDiv>{l10n.title.paint}</SubtitleDiv>
      </TitleBox>
      <ImageContainer>
        <ImageBox src={require("./images/p_image.JPG")} alt="" />
      </ImageContainer>
    </OtherBox>
  );
};

export default PageImage;
