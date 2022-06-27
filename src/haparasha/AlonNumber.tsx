import React from "react";
import styled from "styled-components";
import { DavidMediumText } from "../Common";
import l10n from "./l10n.json";

const TagBox = styled.div`
  position: absolute;
  top: -26px;
  left: 10px;
  width: 250px;
`;

const SvgBox = styled.div`
  -webkit-print-color-adjust: exact;
  position: absolute;
  top: 0;
  left: 0;
`;

const InnerBox = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  top: 0;
  left: 0;
  color: white;
  z-index: 2;
`;

const Tag = styled.div`
  -webkit-print-color-adjust: exact;
  ${DavidMediumText}
  line-height: 25px;
`;

const RemezDiv = styled.div`
  -webkit-print-color-adjust: exact;
  ${DavidMediumText}
  line-height: 25px;
`;

const AlonNumber = () => {
  return (
    <TagBox dir="RTL">
      <SvgBox>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 26 28"
          fill="#3b3b35"
        >
          <title>star</title>
          <path d="M26 10.109c0 0.281-0.203 0.547-0.406 0.75l-5.672 5.531 1.344 7.812c0.016 0.109 0.016 0.203 0.016 0.313 0 0.406-0.187 0.781-0.641 0.781-0.219 0-0.438-0.078-0.625-0.187l-7.016-3.687-7.016 3.687c-0.203 0.109-0.406 0.187-0.625 0.187-0.453 0-0.656-0.375-0.656-0.781 0-0.109 0.016-0.203 0.031-0.313l1.344-7.812-5.688-5.531c-0.187-0.203-0.391-0.469-0.391-0.75 0-0.469 0.484-0.656 0.875-0.719l7.844-1.141 3.516-7.109c0.141-0.297 0.406-0.641 0.766-0.641s0.625 0.344 0.766 0.641l3.516 7.109 7.844 1.141c0.375 0.063 0.875 0.25 0.875 0.719z"></path>
        </svg>
      </SvgBox>
      <SvgBox style={{ transform: "rotate(36deg)" }}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 26 28"
          fill="#3b3b35"
        >
          <title>star</title>
          <path d="M26 10.109c0 0.281-0.203 0.547-0.406 0.75l-5.672 5.531 1.344 7.812c0.016 0.109 0.016 0.203 0.016 0.313 0 0.406-0.187 0.781-0.641 0.781-0.219 0-0.438-0.078-0.625-0.187l-7.016-3.687-7.016 3.687c-0.203 0.109-0.406 0.187-0.625 0.187-0.453 0-0.656-0.375-0.656-0.781 0-0.109 0.016-0.203 0.031-0.313l1.344-7.812-5.688-5.531c-0.187-0.203-0.391-0.469-0.391-0.75 0-0.469 0.484-0.656 0.875-0.719l7.844-1.141 3.516-7.109c0.141-0.297 0.406-0.641 0.766-0.641s0.625 0.344 0.766 0.641l3.516 7.109 7.844 1.141c0.375 0.063 0.875 0.25 0.875 0.719z"></path>
        </svg>
      </SvgBox>
      <InnerBox>
        <Tag>{l10n.title.number}</Tag>
        <RemezDiv>{l10n.title.remez}</RemezDiv>
      </InnerBox>
    </TagBox>
  );
};

export default AlonNumber;
