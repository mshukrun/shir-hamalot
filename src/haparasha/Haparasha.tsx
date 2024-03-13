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
import OtherSong from "./OtherSong";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    950px //20
    450px //30
    250px //40
    120px //50
    400px //60
    200px //70
    280px //80
    250px //90
    300px //110
    300px; //210
  grid-template-columns: 650px 650px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "        Hizok  Gmara       " //30
    "        Magic  Tora       " //30
    "PageTitle  PageTitle " //50
    "    Paint        Mahane     " //60
    "    Paint        Chida     " //70
    "   Parasha  Koren   " //80
    "   Yahe  Koren     " //90
    "  Bad Koren       " //110
    " Todot Todot   "; //120
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
      <OtherLines gridArea="Tora" num={5} listStyle="none" />
      <OtherSong
        gridArea="Koren"
        num={6}
        listStyle="none"
        height="750px"
        blockWidth="300px"
      />
      <PageImage gridArea="Paint" />
    </BodyContainer>
  );
};

export default Haparasha;
