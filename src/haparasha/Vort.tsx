import React from "react";
import styled from "styled-components";
import { MediumText } from "../Common";
import l10n from "./l10n.json";
import CommonFrame from "../CommonFrame";

const GoodShabesDiv = styled.div`
  position: absolute;
  ${MediumText}
  bottom: 12px;
  left: 35px;
  text-decoration: underline;
`;

const Vort = () => {
  return (
    <CommonFrame
      gridArea="Vort"
      title={l10n.vort.title}
      content={l10n.vort.text}
    >
      <GoodShabesDiv>{l10n.vort.goodShabes}</GoodShabesDiv>
    </CommonFrame>
  );
};

export default Vort;
