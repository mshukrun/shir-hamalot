import React from "react";
import styled from "styled-components";
import { RegularText } from "../Common";
import l10n from "./l10n.json";
import CommonFrame from "../CommonFrame";

const CreditDiv = styled.div`
  position: absolute;
  ${RegularText}
  bottom: 10px;
  left: 12px;
`;

const Bad = () => {
  const credit = l10n.badSong.credit;
  return (
    <CommonFrame
      gridArea="Bad"
      title={l10n.badSong.title}
      content={l10n.badSong.text}
    >
      {credit && <CreditDiv>{l10n.badSong.credit}</CreditDiv>}
    </CommonFrame>
  );
};

export default Bad;
