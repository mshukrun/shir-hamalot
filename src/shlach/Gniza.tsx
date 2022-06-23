import React from "react";
import styled, { css } from "styled-components";
import l10n from "./l10n.json";

const TagBox = styled.div<{
  b?: string;
  t?: string;
  l?: string;
  r?: string;
}>`
  position: absolute;
  ${({ t }) =>
    css`
      top: ${t};
    `};
  ${({ b }) =>
    css`
      bottom: ${b};
    `};
  ${({ r }) =>
    css`
      right: ${r};
    `};
  ${({ l }) =>
    css`
      left: ${l};
    `};
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

const Gniza: React.FC<{
  b?: string;
  t?: string;
  l?: string;
  r?: string;
}> = ({ t, l, b, r }) => {
  return (
    <TagBox dir="RTL" t={t} l={l} b={b} r={r}>
      <Tag>{l10n.gniza}</Tag>
    </TagBox>
  );
};

export default Gniza;
