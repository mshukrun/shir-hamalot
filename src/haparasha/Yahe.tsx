import React from "react";
import styled from "styled-components";
import { RegularText } from "../Common";
import l10n from "./l10n.json";
import CommonFrame from "../CommonFrame";

const OL = styled.ol`
  ${RegularText}
  padding: 10px 45px 10px;
`;

const TextDiv = styled.div`
  ${RegularText}
  padding: 2px 0;
`;

const FirstTextDiv = styled(TextDiv)`
  padding-left: 90px;
`;

const CreditDiv = styled.div`
  position: absolute;
  ${RegularText}
  bottom: 12px;
  left: 35px;
  text-decoration: underline;
`;

const Yahe = () => {
  const texts = l10n.yahe.content.split("|");
  return (
    <CommonFrame gridArea="Yahe" title={l10n.yahe.title} content="">
      <OL>
        {texts.map((text, index) => (
          <li key={`text_${index}`}>
            {index === 0 ? (
              <FirstTextDiv>{text}</FirstTextDiv>
            ) : (
              <TextDiv>{text}</TextDiv>
            )}
          </li>
        ))}
      </OL>
      <CreditDiv>{l10n.yahe.credit}</CreditDiv>
    </CommonFrame>
  );
};

export default Yahe;
