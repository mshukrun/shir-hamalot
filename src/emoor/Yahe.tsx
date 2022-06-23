import React from "react";
import styled from "styled-components";
import { BasicBox, RegularText, TitleDiv } from "../Common";
import l10n from "./l10n.json";

const YaheBox = styled(BasicBox)`
  grid-area: yahe;
  position: relative;
`;

const OL = styled.ol`
  ${RegularText}
  padding: 10px 45px 10px;
`;

const TextDiv = styled.div`
  ${RegularText}
  text-align: right;
`;

const CreditDiv = styled.div`
  position: absolute;
  ${RegularText}
  bottom: 12px;
  left: 35px;
  text-decoration: underline;
`;

const Yahe = () => {
  return (
    <YaheBox dir="RTL">
      <TitleDiv>{l10n.yahe.title}</TitleDiv>
      <OL>
        <li>
          <TextDiv>{l10n.yahe.first}</TextDiv>
        </li>
        <li>
          <TextDiv>{l10n.yahe.second}</TextDiv>
        </li>
        {/* <li>
          <TextDiv>{l10n.yahe.third}</TextDiv>
        </li> */}
      </OL>
      <CreditDiv>{l10n.yahe.credit}</CreditDiv>
    </YaheBox>
  );
};

export default Yahe;
