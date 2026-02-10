import React from "react";
import styled from "styled-components";

const FrameBox = styled.div`
  position: relative;
  padding-top: 8px;
  padding-left: 8px;
  display: flex;
  position: relative;
  flex-flow: column;
  justify-content: flex-start;
`;

interface BlankSpaceProps {
  gridArea: string;
  size: number;
}

const BlankSpace: React.FC<BlankSpaceProps> = ({ gridArea, size }) => {
  return (
    <FrameBox
      style={{ gridArea: gridArea, height: `${size}px` }}
      dir="RTL"
    ></FrameBox>
  );
};

export default BlankSpace;
