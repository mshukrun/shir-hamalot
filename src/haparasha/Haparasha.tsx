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
import Sipor from "./Sipor";
import Parasha from "./Parasha";
import OtherLines from "./OtherLines";
import PageImage from "./PageImage";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    860px //20
    250px //30
    380px //35
    230px //40
    120px //50
    270px //60
    340px //70
    300px //80
    250px //85
    150px //90
    150px //90
    340px; //100
  grid-template-columns: 670px 670px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "   Tora Gmara     " //30
    "   Hizok Gmara     " //35
    "  Hidod     Magic   " //40
    "PageTitle  PageTitle " //50
    "        Brahot   Bad    " //60
    "        Brahot  Mahane     " //70
    "       Brahot   Paint " //80
    "       Parasha  Yahe    " //85
    "  Sipor  Briha    " //90
    "  Sipor Beher     " //90
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
      <Magic />
      <Todot />
      <Sipor />
      <Parasha />
      <OtherLines gridArea="Briha" num={1} listStyle="none" />
      <OtherLines gridArea="Gmara" num={2} listStyle="none" />
      <OtherLines gridArea="Hizok" num={3} listStyle="none" />
      <OtherLines gridArea="Beher" num={4} listStyle="none" />
      <OtherLines gridArea="Hidod" num={5} listStyle="none" />
      <OtherLines gridArea="Tora" num={6} listStyle="none" />
      <PageImage gridArea="Paint" />
    </BodyContainer>
  );
};

export default Haparasha;
