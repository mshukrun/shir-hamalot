import React from "react";
import styled from "styled-components";

const SvgBox = styled.div`
  -webkit-print-color-adjust: exact;
  display: flex;
`;

const Heart: React.FC<{ size: number }> = ({ size }) => {
  return (
    <SvgBox>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 28 28"
      >
        <title>Heart</title>
        <path d="M14 26c-0.25 0-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313 0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281z"></path>
      </svg>
    </SvgBox>
  );
};

export default Heart;
