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
import Shmita from "./Shmita";
import Magic from "./Magic";

const BodyContainer = styled.div`
  display: grid;
  height: 3280px;
  width: 1200px;
  grid-template-rows: 280px 860px 550px 100px 700px 350px 260px 270px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Title Title"
    "Vort Vort  "
    "   Mahane  Sipor  "
    "PageTitle  PageTitle "
    "  Brahot Parasha     "
    "   Yahe Magic   "
    " Shmita Chida"
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
      <Magic />
      <Sipor />
      <Shmita />
      <Todot />
    </BodyContainer>
  );
};

export default Haparasha;
