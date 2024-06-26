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
import Magic from "./Magic";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 250px //10
    820px //20
    400px //30
    120px //50
    340px //60
    230px //80
    215px //90
    250px //100
    310px; //110
  grid-template-columns: 500px 500px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "  Bad          Mahane     " //30
    "PageTitle  PageTitle " //50
    "        Hizok  Tora      " //60
    "  Parasha      Magic  " //80
    "     Chida   Gmara  " //90
    "   Yahe   Gmara     " //100
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
      <Parasha />
      {/* <Tifzoret table={{ left: 95, top: 70 }} words={{ top: 250 }} /> */}
      <Chida />
      <Magic />

      <OtherLines gridArea="Gmara" num={2} listStyle="none" />
      <OtherLines gridArea="Hizok" num={3} listStyle="none" />
      <OtherLines gridArea="Tora" num={5} listStyle="none" />
    </BodyContainer>
  );
};

export default Haparasha;
