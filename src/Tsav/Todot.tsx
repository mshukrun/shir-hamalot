import React from "react";
import styled from "styled-components";
import { BasicBox, RegularPlusText } from "../Common";
import Gniza from "./Gniza";
import l10n from "./l10n.json";

const TodotBox = styled(BasicBox)`
  grid-area: todot;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const OL = styled.ol`
  ${RegularPlusText}
  list-style-type: disc;
  padding: 5px 50px 10px;
`;

const TextDiv = styled.div`
  ${RegularPlusText}
`;

const Todot = () => {
  return (
    <TodotBox dir="RTL">
      <OL>
        <li>
          <TextDiv>{l10n.todot.first}</TextDiv>
        </li>
        <li>
          <TextDiv>{l10n.todot.second}</TextDiv>
        </li>
        <li>
          <TextDiv>{l10n.todot.third}</TextDiv>
        </li>
        <li>
          <TextDiv>{l10n.todot.four}</TextDiv>
        </li>
      </OL>
      <Gniza />
    </TodotBox>
  );
};

export default Todot;
