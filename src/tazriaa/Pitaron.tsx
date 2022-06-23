import React from "react";
import styled from "styled-components";
import { BasicBox, SmallText, TinyText, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const PitaromBox = styled(BasicBox)`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 90%;
`;

const PTitle = styled(TitleDiv)`
  ${SmallText}
  margin: 4px auto 0;
`;

const OL = styled.ol`
  ${TinyText}
  list-style-type: disc;
  padding: 4px 25px 4px 10px;
  transform: rotate(-180deg);
`;

const TextDiv = styled.div`
  ${TinyText}
`;

const Pitaron = () => {
  return (
    <PitaromBox dir="RTL">
      <PTitle>{l10n.pitaron.title}</PTitle>
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
        <li>
          <TextDiv>{l10n.pitaron.four}</TextDiv>
        </li>
      </OL>
    </PitaromBox>
  );
};

export default Pitaron;
