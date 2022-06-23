import React from "react";
import styled from "styled-components";
import { BasicBox } from "../Common";
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
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  list-style-type: disc;
  padding: 5px 50px 10px;
`;

const TextDiv = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
`;

const PhoneDiv = styled.div`
  position: absolute;
  font-family: "David Libre", serif;
  font-weight: 500;
  font-size: 30px;
  line-height: 32px;
  bottom: 65px;
  left: 40px;
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
      <PhoneDiv>{l10n.todot.phone}</PhoneDiv>
      <Gniza />
    </TodotBox>
  );
};

export default Todot;
