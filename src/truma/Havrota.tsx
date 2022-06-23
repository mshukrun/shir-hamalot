import React from "react";
import styled from "styled-components";
import l10n from "./l10n.json";

const TagBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
`;

const Tag = styled.div`
  -webkit-print-color-adjust: exact;
  font-weight: 800;
  font-family: "David Libre", serif;
  font-size: 20px;
  line-height: 26px;
  background-color: #242020;
  color: white;
  border-radius: 8px;
  text-align: center;
  padding: 4px;
`;

const Havrota = () => {
  return (
    <TagBox dir="RTL">
      <Tag>{l10n.havrota}</Tag>
    </TagBox>
  );
};

export default Havrota;
