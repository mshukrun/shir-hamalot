import React from "react";
import styled from "styled-components";
import l10n from "./l10n.json";

const TagBox = styled.div`
  position: absolute;
  top: -30px;
  left: 150px;
  width: 50px;
`;

const SvgBox = styled.div`
  -webkit-print-color-adjust: exact;
`;

const Tag = styled.div`
  -webkit-print-color-adjust: exact;
  position: absolute;
  top: 36px;
  left: -34px;
  font-weight: 600;
  font-family: "David Libre", serif;
  font-size: 30px;
  line-height: 34px;
  color: white;
  transform: rotate(41deg);
`;

const Hadash = () => {
  return (
    <TagBox dir="RTL">
      <SvgBox>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 30 28"
          fill="#3b3a3a"
        >
          <title>tags</title>
          <path d="M7 7c0-1.109-0.891-2-2-2s-2 0.891-2 2 0.891 2 2 2 2-0.891 2-2zM23.672 16c0 0.531-0.219 1.047-0.578 1.406l-7.672 7.688c-0.375 0.359-0.891 0.578-1.422 0.578s-1.047-0.219-1.406-0.578l-11.172-11.188c-0.797-0.781-1.422-2.297-1.422-3.406v-6.5c0-1.094 0.906-2 2-2h6.5c1.109 0 2.625 0.625 3.422 1.422l11.172 11.156c0.359 0.375 0.578 0.891 0.578 1.422zM29.672 16c0 0.531-0.219 1.047-0.578 1.406l-7.672 7.688c-0.375 0.359-0.891 0.578-1.422 0.578-0.812 0-1.219-0.375-1.75-0.922l7.344-7.344c0.359-0.359 0.578-0.875 0.578-1.406s-0.219-1.047-0.578-1.422l-11.172-11.156c-0.797-0.797-2.312-1.422-3.422-1.422h3.5c1.109 0 2.625 0.625 3.422 1.422l11.172 11.156c0.359 0.375 0.578 0.891 0.578 1.422z"></path>
        </svg>
      </SvgBox>
      <Tag>{l10n.hadash}</Tag>
    </TagBox>
  );
};

export default Hadash;
