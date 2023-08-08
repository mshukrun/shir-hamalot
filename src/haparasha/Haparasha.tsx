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
import Chida from "./Chida";
import Magic from "./Magic";
import Sipor from "./Sipor";
import OtherLines from "./OtherLines";
import Parasha from "./Parasha";
import PageImage from "./PageImage";
import OtherSong from "./OtherSong";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    1400px //20
    120px //30
    300px //40
    570px //60
    280px //70
    350px //80
    120px //100
    520px //110
    280px //120
    280px //130
    400px //140
    120px //145
    1100px //150
    400px; //1000
  grid-template-columns: 550px 550px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "Page2  Page2 " //30
    "   Chida Sipor     " //40
    "        Brahot   Bad    " //60
    "        Brahot  Yahe      " //70
    "  Guest Magic     " //80
    "  Page3 Page3     " //100
    "   Mispashir Remez   " //110
    " Idan Idish " // 120
    " Idan Hidod " // 130
    "   Mahane   Parasha  " //140
    "  Page4 Page4     " //145
    "Image2 Image2" //150
    " Todot Todot   "; //1000
  font-family: "Bona Nova", serif;
  row-gap: 8px;
  column-gap: 8px;
  padding: 32px;
`;

const Haparasha = () => {
  return (
    <BodyContainer>
      <Title />
      <PageTitle num={2} gridArea="Page2" />
      <Vort />
      <Yahe />
      <Mahane />
      <Bad />
      <Brahot />
      <Chida />
      <Magic />
      <Todot />
      <Sipor />
      <OtherLines gridArea="Mispashir" listStyle="decimal" num={2} />
      <PageTitle num={3} gridArea="Page3" />
      <PageTitle num={4} gridArea="Page4" />
      <OtherLines gridArea="Guest" num={4} listStyle="none" />
      <OtherLines gridArea="Remez" num={1} listStyle="none" />
      <OtherLines gridArea="Idish" num={6} listStyle="decimal" />
      <OtherLines gridArea="Hidod" num={8} listStyle="none" />
      <OtherSong gridArea="Idan" num={7} listStyle="none" />
      <Parasha />
      <PageImage gridArea="Image2" num={1} />
    </BodyContainer>
  );
};

export default Haparasha;
