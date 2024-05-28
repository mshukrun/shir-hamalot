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

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    860px //20
    520px //30
    120px //50
    370px //60
    200px //80
    250px //90
    240px //100
    300px; //110
  grid-template-columns: 550px 550px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "   Hizok         Gmara     " //30
    "PageTitle  PageTitle " //50
    "   Tora    Mahane   " //60
    "   Bad    Parasha   " //80
    "     Bad   Magic  " //90
    "   Chida   Yahe     " //100
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
      <Todot />
      <Parasha />
      <Magic />
      <Chida />
      <OtherLines gridArea="Gmara" num={2} listStyle="none" />
      <OtherLines gridArea="Hizok" num={3} listStyle="none" />
      <OtherLines gridArea="Tora" num={5} listStyle="none" />
    </BodyContainer>
  );
};

export default Haparasha;
