import React from "react";
import styled from "styled-components";
import { BasicBox, TitleDiv } from "../Common";
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
        <TitleDiv>{l10n.title.paint}</TitleDiv>
      </TitleBox>
      <ImageContainer>
        <ImageBox src={require("./images/p_image.JPG")} alt="" />
      </ImageContainer>
    </OtherBox>
  );
};

export default PageImage;
