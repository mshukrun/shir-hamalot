import React from "react";
import styled from "styled-components";
import Brahot from "./Brahot";
import Chida from "./Chida";
import Mahane from "./Mahane";
import Parasha from "./Parasha";
import Sipor from "./Sipor";
import Title from "./Title";
import Vort from "./Vort";
import Yahe from "./Yahe";
import Todot from "./Todot";
import Shmita from "./Shmita";
import PageTitle from "./PageTitle";
import Tashbetz from "./Tashbetz";

const BodyContainer = styled.div`
  display: grid;
  height: 2900px;
  width: 1000px;
  grid-template-rows: 220px 420px 560px 200px 100px 500px 350px 250px 220px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Title Title"
    "Vort Vort  "
    " Brahot Mahane   "
    " Chida Yahe     "
    "PageTitle  PageTitle "
    "Tashbetz   Tashbetz "
    "  Shmita Parasha   "
    "Sipor   Sipor "
    " Todot Todot  ";
  font-family: "Bona Nova", serif;
  row-gap: 8px;
  column-gap: 8px;
  padding: 32px;
`;

const Shlach = () => {
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
      <Sipor />
      <Tashbetz />
      <Shmita />

      <Todot />
    </BodyContainer>
  );
};

export default Shlach;
