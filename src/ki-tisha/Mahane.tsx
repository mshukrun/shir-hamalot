import React from "react";
import styled from "styled-components";
import { BasicBox } from "../Common";
import ComplexTitle from "../ComplexTitle";
import l10n from "./l10n.json";

const MahaneBox = styled(BasicBox)`
  grid-area: mahane;
  position: relative;
`;

const OL = styled.ol`
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  padding: 10px 40px 10px;
`;

const OLInner = styled.ol`
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  text-align: right;
  padding-right: 20px;
  list-style: hebrew;
`;

const TextDiv = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
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
            <li>
              <TextDiv>{l10n.mahane.secondFour}</TextDiv>
            </li>
            <li>
              <TextDiv>{l10n.mahane.secondFive}</TextDiv>
            </li>
          </OLInner>
        </li>
      </OL>
    </MahaneBox>
  );
};

export default Mahane;
