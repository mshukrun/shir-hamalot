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
import Parasha from "./Parasha";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    1070px //20
    200px //30
    200px //40
    120px //50
    300px //60
    450px //70
    220px //80
    320px //90
    290px; //100
  grid-template-columns: 550px 550px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "   Chida Bad     " //30
    "   Parasha Bad     " //40
    "PageTitle  PageTitle " //50
    "        Brahot   Sipor    " //60
    "        Brahot  Mahane     " //70
    "       Brahot  Yahe  " //80
    "  Tifzoret Magic     " //90
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
      <Sipor />
      <Tifzoret
        table={{ left: 40 }}
        words={{ top: 10, width: 300, height: 200 }}
      />
      <Parasha />
    </BodyContainer>
  );
};

export default Haparasha;
