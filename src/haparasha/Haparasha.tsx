import React from "react";
import styled from "styled-components";
import Mahane from "./Mahane";
import Title from "./Title";
import Vort from "./Vort";
import Yahe from "./Yahe";
import Todot from "./Todot";
import PageTitle from "./PageTitle";
import Bad from "./Bad";
import OtherLines from "./OtherLines";
import Chida from "./Chida";
import Parasha from "./Parasha";
import PageImage from "./PageImage";
import Magic from "./Magic";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    900px //20
    470px //30
    120px //50
    180px //60
    150px //60
    300px //80
    320px //90
    200px //100
    330px; //110
  grid-template-columns: 550px 550px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "    Hizok        Ashreno     " //30
    "PageTitle  PageTitle " //50
    "   Mahane  Chida    " //60
    "   Mahane Parasha       " //70
    "     Bad     Gmara     " //80
    "   Paint  Magic     " //90
    "      Beher  Yahe  " //100
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
      <Yahe />
      <Mahane />
      <Bad />
      <Todot />
      <Chida />
      <Parasha />
      <Magic />
      <OtherLines gridArea="Gmara" num={2} listStyle="none" />
      <OtherLines gridArea="Hizok" num={3} listStyle="none" />
      <OtherLines gridArea="Beher" num={4} listStyle="none" />
      <OtherLines gridArea="Ashreno" num={5} listStyle="none" />
      <PageImage gridArea="Paint" />
    </BodyContainer>
  );
};

export default Haparasha;
