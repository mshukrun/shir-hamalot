import React from "react";
import styled from "styled-components";
import { BasicBox } from "../Common";
import ComplexTitle from "../ComplexTitle";
import l10n from "./l10n.json";

const PitaromBox = styled(BasicBox)`
  grid-area: pitaron;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const OL = styled.ol`
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  list-style-type: disc;
  padding: 5px 50px 10px;
`;

const TextDiv = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
`;

const Pitaron = () => {
  return (
    <PitaromBox dir="RTL">
      <ComplexTitle
        title={l10n.pitaron.title}
        subtitle={l10n.pitaron.subtitle}
      />
      <OL>
        <li>
          <TextDiv>{l10n.pitaron.first}</TextDiv>
        </li>
        <li>
          <TextDiv>{l10n.pitaron.second}</TextDiv>
        </li>
        <li>
          <TextDiv>{l10n.pitaron.third}</TextDiv>
        </li>
      </OL>
    </PitaromBox>
  );
};

export default Pitaron;
