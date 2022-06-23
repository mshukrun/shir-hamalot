import React from "react";
import styled from "styled-components";
import { SmallText } from "../Common";
import l10n from "./l10n.json";

const TagBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 150px;
`;

const Tag = styled.div`
  -webkit-print-color-adjust: exact;
  ${SmallText}
  font-weight: 800;
  background-color: #242020;
  color: white;
  border-radius: 8px;
  text-align: center;
  padding: 4px;
`;

const TagText = styled.div`
  -webkit-print-color-adjust: exact;
  ${SmallText}
`;

const Havrota = () => {
  return (
    <TagBox dir="RTL">
      <Tag>
        <TagText>{l10n.havrota}</TagText>
        <TagText>{l10n.havrotaPhone}</TagText>
      </Tag>
    </TagBox>
  );
};

export default Havrota;
