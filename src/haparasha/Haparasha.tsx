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
import OtherSong from "./OtherSong";
import OtherLines from "./OtherLines";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    1350px //20
    240px //40
    120px //50
    400px //60
    480px //70
    220px //80
    320px //90
    290px; //100
  grid-template-columns: 600px 600px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "   Chida Bilbol     " //40
    "PageTitle  PageTitle " //50
    "        Brahot   Bad    " //60
    "        Brahot   Shiron    " //70
    "       Yahe  Yahe  " //80
    "  Mahane Magic     " //90
    " Todot Todot   "; //100
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
      <Brahot />
      <Chida />
      <Magic />
      <Todot />
      <OtherSong gridArea="Shiron" num={1} listStyle="none" />
      <OtherLines gridArea="Bilbol" num={2} listStyle="none" />
    </BodyContainer>
  );
};

export default Haparasha;
