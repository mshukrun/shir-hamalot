import React from "react";
import styled from "styled-components";
import Brahot from "./Brahot";
import Chida from "./Chida";
import Magic from "./Magic";
import Mahane from "./Mahane";
import Parasha from "./Parasha";
import Sipor from "./Sipor";
import Title from "./Title";
import Vort from "./Vort";
import Yahe from "./Yahe";
import NoRead from "./NoRead";
import Pitaron from "./Pitaron";
import Todot from "./Todot";

const BodyContainer = styled.div`
  display: grid;
  height: 1700px;
  width: 1200px;
  grid-template-rows: 2fr 4fr 2fr 1fr 0.8fr 2.2fr 2fr;
  grid-template-columns: 2.5fr 2fr;
  grid-template-areas:
    "empty yahe"
    "vort brahot"
    "mahane parasha"
    "mahane chida"
    "sipor chida"
    "sipor magic"
    "pitaron todot";
  font-family: "Bona Nova", serif;
  row-gap: 8px;
  column-gap: 8px;
  padding: 32px;
`;

const Truma = () => {
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
      <Magic />
      <Sipor />
      <Pitaron />
      <Todot />
    </BodyContainer>
  );
};

export default Truma;
