import React from "react";
import styled from "styled-components";
import l10n from "./l10n.json";

const TagBox = styled.div`
  position: absolute;
  top: 8px;
  right: 6px;
  width: 80px;
`;

const Tag = styled.div`
  -webkit-print-color-adjust: exact;
  font-weight: 400;
  font-family: "David Libre", serif;
  font-size: 20px;
  line-height: 28px;
  background-color: #554646;
  color: white;
  border-radius: 24px;
  white-space: nowrap;
  text-align: center;
`;

const Basad = () => {
  return (
    <TagBox dir="RTL">
      <Tag>{l10n.basad}</Tag>
    </TagBox>
  );
};

export default Basad;
