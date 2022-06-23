import React from "react";
import styled from "styled-components";
import { BasicBox, SmallText, TinyText, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const PitaromBox = styled(BasicBox)`
  position: absolute;
  bottom: 10px;
  left: 30px;
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
  const pitarons: number[] = [];
  for (let index = 0; index < 6; index++) {
    pitarons.push(index);
  }
  return (
    <PitaromBox dir="RTL">
      <PTitle>{l10n.pitaron.title}</PTitle>
      <OL>
        {pitarons.map((index: number) => {
          return (
            <li>
              {/* @ts-ignore */}
              <TextDiv>{l10n.pitaron?.[`pitaron${index}`]}</TextDiv>
            </li>
          );
        })}
      </OL>
    </PitaromBox>
  );
};

export default Pitaron;
