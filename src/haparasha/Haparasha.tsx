import React from "react";
import styled from "styled-components";
import Mahane from "./Mahane";
import Title from "./Title";
import Vort from "./Vort";
import Yahe from "./Yahe";
import Todot from "./Todot";
import PageTitle from "./PageTitle";
import Bad from "./Bad";
import Sipor from "./Sipor";
import Brahot from "./Brahot";
import Chida from "./Chida";
import OtherLines from "./OtherLines";
import Magic from "./Magic";
import IdanSong from "./IdanSong";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    870px //20
    420px //30
    240px //40
    120px //50
    400px //60
    350px //70
    380px //80
    200px //90
    300px; //100
  grid-template-columns: 600px 600px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "  Omer Mahane    " //30
    "   Bad    Yahe" //40
    "PageTitle  PageTitle " //50
    "        Brahot   Idan   " //60
    "        Brahot   Idan   " //70
    "       Magic  Sipor  " //80
    "  Parasha   Chida   " //90
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
      <Sipor />
      <Brahot />
      <Chida />
      <Todot />
      <Magic />
      <OtherLines gridArea="Omer" num={1} listStyle="none" />
      <OtherLines gridArea="Parasha" num={2} listStyle="none" />
      <IdanSong gridArea="Idan" num={3} />
    </BodyContainer>
  );
};

export default Haparasha;
