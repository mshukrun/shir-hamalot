import React from "react";
import styled from "styled-components";
import l10n from "./l10n.json";

const TagBox = styled.div`
  position: absolute;
  bottom: 4px;
  left: 10px;
  width: 400px;
`;

const Tag = styled.div`
  -webkit-print-color-adjust: exact;
  font-weight: 800;
  font-family: "David Libre", serif;
  font-size: 50px;
  line-height: 54px;
  background-color: #242020;
  color: white;
  border-radius: 24px;
  white-space: nowrap;
  text-align: center;
`;

const Gniza = () => {
  return (
    <TagBox dir="RTL">
      <Tag>{l10n.gniza}</Tag>
    </TagBox>
  );
};

export default Gniza;
