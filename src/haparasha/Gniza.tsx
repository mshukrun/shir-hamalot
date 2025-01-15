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
  width: 190px;
`;

const Tag = styled.div`
  -webkit-print-color-adjust: exact;
  font-weight: 600;
  font-size: 25px;
  line-height: 27px;
  background-color: #fff;
  color: #242020;
  border: 1px solid #242020;
  border-radius: 24px;
  white-space: nowrap;
  text-align: center;
  transform: rotate(-90deg);
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
