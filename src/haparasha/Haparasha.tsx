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
import OtherSong from "./OtherSong";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 250px //10
    880px //20
    440px //30
    170px //40
    120px //50
    300px //60
    200px //70
    270px //80
    430px //100
    300px; //110
  grid-template-columns: 600px 600px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "      Song   Song      " //30
    "     Tora   Tora  " //40
    "PageTitle  PageTitle " //50
    "  Bad      Gmara         " //60
    "  Chida      Gmara         " //70
    "  Parasha   Magic     " //80
    "      Hizok    Mahane  " //100
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
      <Parasha />
      <Magic />
      <Chida />

      <OtherLines gridArea="Gmara" num={2} listStyle="none" />
      <OtherLines gridArea="Hizok" num={3} listStyle="none" />
      <OtherLines gridArea="Tora" num={5} listStyle="none" />
      <OtherSong gridArea="Song" num={4} listStyle="none" />
    </BodyContainer>
  );
};

export default Haparasha;
