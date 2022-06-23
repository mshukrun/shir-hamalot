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
import Magic from "./Magic";
import Other from "./Other";
import OtherLines from "./OtherLines";

const BodyContainer = styled.div`
  display: grid;
  height: 3190px;
  width: 1100px;
  grid-template-rows: 220px 515px 585px 255px 100px 360px 450px 220px 200px 250px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Title Title"
    "Vort Vort  "
    " Brahot MaTaham  "
    " Yahe Chida    "
    "PageTitle  PageTitle "
    " David   Rot "
    "  Mahane  Shmita "
    "  Magic Parasha"
    "Sipor   Sipor "
    " Todot Todot  ";
  font-family: "Bona Nova", serif;
  row-gap: 8px;
  column-gap: 8px;
  padding: 32px;
`;

const Naso = () => {
  return (
    <BodyContainer>
      <Title />
      <Vort />
      <Brahot />
      <Yahe />
      <Mahane />
      <Parasha />
      <Chida />
      <Sipor />
      <Todot />
      <Shmita />
      <Magic />
      <PageTitle />
      {/* <Other gridArea="Other1" num={1} /> */}
      <Other gridArea="David" num={2} />
      <OtherLines gridArea="MaTaham" num={3} listStyle="hebrew" />
      <Other gridArea="Rot" num={4} />
    </BodyContainer>
  );
};

export default Naso;
