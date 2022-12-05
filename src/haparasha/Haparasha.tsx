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
import Bad from "./Bad";
import Numbers from "./Numbers";
import Magic from "./Magic";
import Shmita from "./Shmita";

const BodyContainer = styled.div`
  display: grid;
  height: 3460px;
  width: 1300px;
  grid-template-rows: 240px 920px 290px 380px 100px 350px 460px 230px 250px 360px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Title Title"
    "Vort Vort  "
    "  Sipor     Bad  "
    "  Numbers   Mahane  "
    "PageTitle  PageTitle "
    "  Brahot Shmita     "
    "  Brahot Shmita     "
    "   Yahe  Chida  "
    "Magic  Parasha"
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
      <Bad />
      <Numbers />
      <Shmita />
      <Todot />
    </BodyContainer>
  );
};

export default Haparasha;
