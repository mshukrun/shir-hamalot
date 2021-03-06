import React from "react";
import styled from "styled-components";
import { BasicBox, RegularText } from "../Common";
import Gniza from "./Gniza";
import l10n from "./l10n.json";
import Pitaron from "./Pitaron";

const TodotBox = styled(BasicBox)`
  grid-area: Todot;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const OL = styled.ol`
  ${RegularText}
  list-style-type: disc;
  padding: 5px 50px 10px;
`;

const TextDiv = styled.div`
  ${RegularText}
`;

const Todot = () => {
  return (
    <TodotBox dir="RTL">
      <OL>
        <li>
          <TextDiv>{l10n.todot.first}</TextDiv>
        </li>
        {/* <li>
          <TextDiv>{l10n.todot.second}</TextDiv>
        </li> */}
        <li>
          <TextDiv>{l10n.todot.third}</TextDiv>
        </li>
        <li>
          <TextDiv>{l10n.todot.four}</TextDiv>
        </li>
      </OL>
      <Gniza r="20px" b="20px" />
      <Pitaron l="10px" b="10px" w="45%" />
    </TodotBox>
  );
};

export default Todot;
