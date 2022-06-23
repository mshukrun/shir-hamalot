import React from "react";
import styled from "styled-components";
import Brahot from "./Brahot";
import Chida from "./Chida";
import Mahane from "./Mahane";
import Parasha from "./Parasha";
import Sipor from "./Sipor";
import Title from "./Title";
import Vort from "./Vort";
import Yahe from "./Yahe";
import NoRead from "./NoRead";
import Todot from "./Todot";
import Tifzoret from "./Tifzoret";
import Pitaron from "./Pitaron";

const BodyContainer = styled.div`
  display: grid;
  height: 2000px;
  width: 1450px;
  grid-template-rows: 1.5fr 2.5fr 2.4fr 1.6fr 1.2fr 1fr;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    "empty brahot"
    "vort brahot  "
    "mahane  tifzoret"
    "sipor  tifzoret  "
    "yahe parasha   "
    " todot chida  ";
  font-family: "Bona Nova", serif;
  row-gap: 8px;
  column-gap: 8px;
  padding: 32px;
`;

const Pesach = () => {
  return (
    <BodyContainer>
      <Title />
      <NoRead />
      <Vort />
      <Brahot />
      <Yahe />
      <Mahane />
      <Parasha />
      <Chida />
      <Tifzoret />
      <Sipor />
      <Todot />
    </BodyContainer>
  );
};

export default Pesach;
