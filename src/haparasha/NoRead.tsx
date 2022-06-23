import React from "react";
import styled from "styled-components";
import l10n from "./l10n.json";

const TagBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 200px;
  width: 600px;
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

const NoRead = () => {
  return (
    <TagBox dir="RTL">
      <Tag>{l10n.title.noRead}</Tag>
    </TagBox>
  );
};

export default NoRead;
