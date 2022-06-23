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
import Tifzoret from "./Tifzoret";

const BodyContainer = styled.div`
  display: grid;
  height: 2900px;
  width: 1000px;
  grid-template-rows: 220px 530px 350px 300px 100px 500px 350px 250px 220px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Title Title"
    "Vort Vort  "
    " Tifzoret Shmita   "
    " Tifzoret Parasha   "
    "PageTitle  PageTitle "
    "  Brahot Mahane   "
    " Brahot Mahane "
    "Chida   Yahe "
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
      <Shmita />
      <Todot />
    </BodyContainer>
  );
};

export default Haparasha;
