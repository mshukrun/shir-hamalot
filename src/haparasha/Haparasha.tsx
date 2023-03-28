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
import FindWords from "./FindWords";
import Numbers from "./Numbers";
import OtherLines from "./OtherLines";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1500px;
  grid-template-rows: 220px //10
    1310px //20
    200px //30
    350px //30
    120px //50
    420px //60
    350px //70
    550px //80
    300px //90
    350px; //100
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "  Chida    Yahe " //25
    "  Parasha    Numbers " //30
    "PageTitle  PageTitle " //50
    "        Brahot   Mahane   " //60
    "        Brahot   Azarim   " //70
    "        Brahot   FindWords" //80
    "  Bad Sipor   " //90
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
      <FindWords />
      <Todot />
      <OtherLines gridArea="Azarim" num={2} listStyle="none" />
    </BodyContainer>
  );
};

export default Haparasha;
