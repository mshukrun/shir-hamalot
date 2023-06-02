import React from "react";
import styled from "styled-components";
import Mahane from "./Mahane";
import Title from "./Title";
import Vort from "./Vort";
import Yahe from "./Yahe";
import Todot from "./Todot";
import PageTitle from "./PageTitle";
import Bad from "./Bad";
import Brahot from "./Brahot";
import Chida from "./Chida";
import Magic from "./Magic";
import Tifzoret from "./Tifzoret";
import Sipor from "./Sipor";

const BodyContainer = styled.div`
  display: grid;
  grid-template-rows: 220px //10
    950px //20
    220px //30
    200px //40
    120px //50
    440px //60
    500px //70
    300px //80
    260px; //100
  grid-template-columns: 550px 550px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "   Magic Tifzoret     " //40
    "   Chida Tifzoret     " //40
    "PageTitle  PageTitle " //50
    "        Brahot   Bad    " //60
    "        Brahot  Mahane     " //70
    "       Yahe  Sipor  " //80
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
      <Brahot />
      <Chida />
      <Magic />
      <Todot />
      <Tifzoret />
      <Sipor />
    </BodyContainer>
  );
};

export default Haparasha;
