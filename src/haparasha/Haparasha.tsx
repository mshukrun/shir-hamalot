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
import Shmita from "./Shmita";
import PageTitle from "./PageTitle";
import Tashbetz from "./Tashbetz";
import Sipor from "./Sipor";

const BodyContainer = styled.div`
  display: grid;
  height: 3090px;
  width: 1100px;
  grid-template-rows: 220px 450px 460px 380px 100px 460px 320px 260px 260px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Title Title"
    "Vort Vort  "
    " Tashbetz Tashbetz   "
    " Mahane Parasha   "
    "PageTitle  PageTitle "
    "  Brahot Sipor   "
    " Brahot Shmita "
    " Yahe Chida    "
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
      <Tashbetz />
      <Shmita />
      <Sipor />
      <Todot />
    </BodyContainer>
  );
};

export default Haparasha;
