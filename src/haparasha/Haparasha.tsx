import React from "react";
import styled from "styled-components";
import Mahane from "./Mahane";
import Title from "./Title";
import Vort from "./Vort";
import Yahe from "./Yahe";
import Todot from "./Todot";
import PageTitle from "./PageTitle";
import Bad from "./Bad";
import Parasha from "./Parasha";
import Sipor from "./Sipor";
import Magic from "./Magic";
import Brahot from "./Brahot";
import Chida from "./Chida";
import FindWords from "./FindWords";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    970px //20
    500px //30
    120px //50
    450px //60
    250px //70
    340px //80
    220px //90
    300px; //100
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "     Parasha FindWords" //30
    "PageTitle  PageTitle " //50
    "        Brahot   Mahane   " //60
    "        Brahot   Bad   " //70
    "        Yahe   Sipor" //80
    "  Chida Magic   " //90
    " Todot Todot   "; //100
  font-family: "Bona Nova", serif;
  row-gap: 8px;
  column-gap: 8px;
  padding: 32px;
`;

const Haparasha = () => {
  return (
    <BodyContainer>
      <Title />
      <PageTitle />
      <Vort />
      <Yahe />
      <Mahane />
      <Bad />
      <Parasha />
      <Sipor />
      <Magic />
      <Brahot />
      <Chida />
      <FindWords />
      <Todot />
    </BodyContainer>
  );
};

export default Haparasha;
