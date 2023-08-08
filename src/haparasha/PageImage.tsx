import React from "react";
import styled from "styled-components";
import { BasicBox, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const OtherBox = styled(BasicBox)`
  position: relative;
  padding: 16px;
`;

const ImageContainer = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 4px;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

const TitleBox = styled.div`
  position: absolute;
  top: 50px;
  right: 35%;
  display: flex;
  border: 1px solid black;
  background-color: white;
  border-radius: 16px;
  justify-content: flex-start;
  width: 340px;
  height: 70px;
  z-index: 2;
`;

const ImageBox = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;

const PageImage: React.FC<{ num: number; gridArea: string }> = ({
  num,
  gridArea,
}) => {
  return (
    <OtherBox dir="RTL" style={{ gridArea: gridArea }}>
      <TitleBox>
        <TitleDiv>{l10n.other.title5}</TitleDiv>
      </TitleBox>
      <ImageContainer>
        {num === 1 ? (
          <ImageBox src={require("../images/IMG_4713.JPG")} alt="" />
        ) : (
          <ImageBox src={require("../images/IMG_4717.JPG")} alt="" />
        )}
      </ImageContainer>
    </OtherBox>
  );
};

export default PageImage;
