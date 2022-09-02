import React from "react";
import styled from "styled-components";
import Brahot from "./Brahot";
import Chida from "./Chida";
import Mahane from "./Mahane";
import Parasha from "./Parasha";
import Title from "./Title";
import Vort from "./Vort";
import Yahe from "./Yahe";
import Todot from "./Todot";
import PageTitle from "./PageTitle";
import Sipor from "./Sipor";
import Tifzoret from "./Tifzoret";
import Shmita from "./Shmita";

const BodyContainer = styled.div`
  display: grid;
  height: 3090px;
  width: 1100px;
  grid-template-rows: 240px 700px 320px 250px 100px 650px 180px 180px 350px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Title Title"
    "Vort Vort  "
    " Mahane Yahe   "
    " Mahane Shmita    "
    "PageTitle  PageTitle "
    "  Brahot Tifzoret     "
    " Sipor Parasha  "
    " Sipor   Chida  "
    " Todot Todot  ";
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
      <Brahot />
      <Yahe />
      <Mahane />
      <Parasha />
      <Chida />
      <Tifzoret />
      <Sipor />
      <Shmita />
      <Todot />
    </BodyContainer>
  );
};

export default Haparasha;
