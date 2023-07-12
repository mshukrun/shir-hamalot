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
import FindWords from "./FindWords";
import Parasha from "./Parasha";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    1070px //20
    400px //30
    200px //40
    120px //50
    660px //60
    200px //70
    200px //80
    180px //80
    290px; //100
  grid-template-columns: 650px 650px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "   Parasha  Mahane     " //30
    " Sipor Sipor " //40
    "PageTitle  PageTitle " //50
    "        Brahot   FindWords    " //60
    "        Brahot  Yahe     " //70
    "       Bad  Magic  " //80
    "       Bad  Chida  " //80
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
      <Sipor />
      <FindWords />
      <Parasha />
    </BodyContainer>
  );
};

export default Haparasha;
