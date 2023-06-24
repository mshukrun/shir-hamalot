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
import Shmita from "./Shmita";
import Parasha from "./Parasha";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    1000px //20
    450px //40
    120px //50
    400px //60
    300px //70
    180px //80
    180px //90
    180px //90
    290px; //100
  grid-template-columns: 550px 550px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "   Shmita Tifzoret     " //40
    "PageTitle  PageTitle " //50
    "        Brahot  Mahane     " //60
    "        Brahot  Sipor     " //70
    "       Brahot  Yahe  " //80
    "  Bad Parasha     " //90
    "  Bad Chida     " //95
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
      <Todot />
      <Sipor />
      <Shmita />
      <Parasha />
      <Tifzoret
        table={{ left: 40, top: 100 }}
        words={{ top: 30, width: 260, height: 250 }}
      />
    </BodyContainer>
  );
};

export default Haparasha;
