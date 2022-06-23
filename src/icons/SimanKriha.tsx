import React from "react";
import styled from "styled-components";

const SvgBox = styled.div`
  -webkit-print-color-adjust: exact;
  display: flex;
`;

const SimanKriha: React.FC<{ size: number }> = ({ size }) => {
  return (
    <SvgBox>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 10 28"
      >
        <title>siman kriha</title>
        <path d="M8 19.5v3.5c0 0.547-0.453 1-1 1h-4c-0.547 0-1-0.453-1-1v-3.5c0-0.547 0.453-1 1-1h4c0.547 0 1 0.453 1 1zM8.469 3l-0.438 12c-0.016 0.547-0.484 1-1.031 1h-4c-0.547 0-1.016-0.453-1.031-1l-0.438-12c-0.016-0.547 0.422-1 0.969-1h5c0.547 0 0.984 0.453 0.969 1z"></path>
      </svg>
    </SvgBox>
  );
};

export default SimanKriha;
