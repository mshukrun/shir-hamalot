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
  grid-template-rows: 220px //10
    850px //20
    430px //30
    120px //50
    240px //60
    270px //80
    175px //90
    185px //100
    170px //105
    330px; //110
  grid-template-columns: 500px 500px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "        Mahane  Bad      " //30
    "PageTitle  PageTitle " //50
    "      Magic      Hizok     " //60
    "      Tora  Hizok  " //80
    "     Chida  Gmara    " //90
    "   Parasha  Gmara      " //100
    "   Yahe   Yahe     " //105
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
      <Magic />
      <Chida />

      <OtherLines gridArea="Gmara" num={2} listStyle="none" />
      <OtherLines gridArea="Hizok" num={3} listStyle="none" />
      <OtherLines gridArea="Tora" num={5} listStyle="none" />
    </BodyContainer>
  );
};

export default Haparasha;
