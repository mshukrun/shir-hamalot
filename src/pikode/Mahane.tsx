import React from "react";
import styled from "styled-components";
import { BasicBox, RegularPlusText } from "../Common";
import ComplexTitle from "../ComplexTitle";
import l10n from "./l10n.json";
import Shimha2 from "./Shimha2";

const MahaneBox = styled(BasicBox)`
  grid-area: mahane;
  position: relative;
`;

const OL = styled.ol`
  ${RegularPlusText}
  padding: 10px 40px 10px;
`;

const OLInner = styled.ol`
  ${RegularPlusText}
  text-align: right;
  padding-right: 20px;
  list-style: hebrew;
`;

const TextDiv = styled.div`
  ${RegularPlusText}
  top: 58px;
  right: 16px;
  text-align: right;
`;

const Mahane = () => {
  return (
    <MahaneBox dir="RTL">
      <ComplexTitle title={l10n.mahane.title} subtitle={l10n.mahane.subtitle} />
      <OL>
        <li>
          <TextDiv>{l10n.mahane.first}</TextDiv>
          <OLInner>
            <li>
              <TextDiv>{l10n.mahane.firstOne}</TextDiv>
            </li>
            <li>
              <TextDiv>{l10n.mahane.firstTwo}</TextDiv>
            </li>
            <li>
              <TextDiv>{l10n.mahane.firstThree}</TextDiv>
            </li>
          </OLInner>
        </li>
        <li>
          <TextDiv>{l10n.mahane.second}</TextDiv>
          <OLInner>
            <li>
              <TextDiv>{l10n.mahane.secondOne}</TextDiv>
            </li>
            <li>
              <TextDiv>{l10n.mahane.secondTwo}</TextDiv>
            </li>
            <li>
              <TextDiv>{l10n.mahane.secondThree}</TextDiv>
            </li>
          </OLInner>
        </li>
      </OL>
      <Shimha2 />
    </MahaneBox>
  );
};

export default Mahane;
