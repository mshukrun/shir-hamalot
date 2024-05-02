import React from "react";
import styled from "styled-components";
import Mahane from "./Mahane";
import Title from "./Title";
import Vort from "./Vort";
import Todot from "./Todot";
import PageTitle from "./PageTitle";
import Bad from "./Bad";
import OtherLines from "./OtherLines";
import Chida from "./Chida";
import Parasha from "./Parasha";
import Magic from "./Magic";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    900px //20
    500px //30
    120px //50
    560px //60
    370px //90
    250px //100
    300px; //110
  grid-template-columns: 550px 550px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "        Hizok  Bad       " //30
    "PageTitle  PageTitle " //50
    "    Gmara      Parasha       " //60
    "     Mahane  Magic    " //90
    "   Tora    Chida   " //100
    " Todot Todot   "; //110
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
      <Mahane />
      <Bad />
      <Todot />
      <Chida />
      <Parasha />
      <Magic />
      <OtherLines gridArea="Gmara" num={2} listStyle="none" />
      <OtherLines gridArea="Hizok" num={3} listStyle="none" />
      <OtherLines gridArea="Tora" num={5} listStyle="none" />
    </BodyContainer>
  );
};

export default Haparasha;
