import React from "react";
import styled from "styled-components";
import Mahane from "./Mahane";
import Title from "./Title";
import Vort from "./Vort";
import Yahe from "./Yahe";
import Todot from "./Todot";
import PageTitle from "./PageTitle";
import Bad from "./Bad";
import Parasha from "./Parasha";
import Sipor from "./Sipor";
import Brahot from "./Brahot";
import Chida from "./Chida";
import Numbers from "./Numbers";
import OtherLines from "./OtherLines";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    850px //20
    300px //30
    380px //40
    120px //50
    400px //60
    350px //70
    280px //80
    280px //90
    300px; //100
  grid-template-columns: 600px 600px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "  Bad Sipor   " //30
    "   Omer   Numbers " //40
    "PageTitle  PageTitle " //50
    "        Brahot   Mahane   " //60
    "        Brahot   Azarim   " //70
    "        Chida   Noa" //80
    "  Parasha     Yahe " //90
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
      <Parasha />
      <Sipor />
      <Brahot />
      <Numbers />
      <Chida />
      <Todot />
      <OtherLines gridArea="Omer" num={1} listStyle="none" />
      <OtherLines gridArea="Azarim" num={2} listStyle="none" />
      <OtherLines gridArea="Noa" num={3} listStyle="none" />
    </BodyContainer>
  );
};

export default Haparasha;
