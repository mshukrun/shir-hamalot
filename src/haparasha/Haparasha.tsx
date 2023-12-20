import React from "react";
import styled from "styled-components";
import Mahane from "./Mahane";
import Title from "./Title";
import Vort from "./Vort";
import Yahe from "./Yahe";
import Todot from "./Todot";
import PageTitle from "./PageTitle";
import Bad from "./Bad";
import Brahot from "./Brahot";
import Magic from "./Magic";
import OtherLines from "./OtherLines";
import Chida from "./Chida";
import Parasha from "./Parasha";
import PageImage from "./PageImage";
import Tifzoret from "./Tifzoret";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    1520px //20
    200px //30
    185px //50
    380px //60
    250px //70
    260px //80
    210px //90
    230px //90
    300px; //110
  grid-template-columns: 670px 670px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "   Chida    Magic  " //30
    "PageTitle  PageTitle " //50
    "        Hizok    Mahane     " //60
    "      Yahe     Bad    " //70
    "       Gmara    Tifzoret    " //80
    "   Parasha    Tifzoret   " //90
    "   Tora    Tifzoret   " //100
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
      <Magic />
      <Todot />
      <Chida />
      <Parasha />
      <Tifzoret words={{ top: 350, height: 250 }} />
      <OtherLines gridArea="Gmara" num={2} listStyle="none" />
      <OtherLines gridArea="Hizok" num={3} listStyle="none" />
      <OtherLines gridArea="Tora" num={5} listStyle="none" />
    </BodyContainer>
  );
};

export default Haparasha;
