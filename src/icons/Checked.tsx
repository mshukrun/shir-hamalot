import React from "react";
import styled from "styled-components";

const SvgBox = styled.div`
  -webkit-print-color-adjust: exact;
  display: flex;
`;

const Checked: React.FC<{ size: number }> = ({ size }) => {
  return (
    <SvgBox>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 32 32"
      >
        <title>radio-checked</title>
        <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12zM10 16c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6z"></path>
      </svg>
    </SvgBox>
  );
};

export default Checked;
