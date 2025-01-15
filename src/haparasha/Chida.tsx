import React from "react";
import styled from "styled-components";
import l10n from "./l10n.json";
import CommonFrame from "../CommonFrame";

const EmptyBox = styled.div`
  font-weight: 400;
  font-size: 56px;
  line-height: 48px;
  text-align: center;
  border-radius: 8px;
  padding: 8px;
  position: absolute;
  top: 80px;
  left: 20px;
`;

const Chida = () => {
  return (
    <CommonFrame
      gridArea="Chida"
      title={l10n.chida.title}
      content={l10n.chida.content}
      isCenter={true}
    >
      <EmptyBox>?</EmptyBox>
    </CommonFrame>
  );
};

export default Chida;
