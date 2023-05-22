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
import Parasha from "./Parasha";
import Tifzoret from "./Tifzoret";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    1125px //20
    400px //40
    120px //50
    450px //60
    250px //70
    270px //80
    280px //90
    300px; //100
  grid-template-columns: 600px 600px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "  Parasha   Mahane    " //40
    "PageTitle  PageTitle " //50
    "        Brahot   Tifzoret   " //60
    "        Brahot   Magic   " //70
    "       Brahot  Chida  " //80
    "  Bad Yahe    " //90
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
      <Parasha />
      <Magic />
      <Tifzoret />
      <Todot />
    </BodyContainer>
  );
};

export default Haparasha;
