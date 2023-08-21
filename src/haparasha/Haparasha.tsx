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
import Tifzoret from "./Tifzoret";
import Sipor from "./Sipor";
import Parasha from "./Parasha";
import OtherLines from "./OtherLines";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    590px //20
    200px //30
    470px //35
    250px //40
    120px //50
    310px //60
    390px //70
    200px //80
    120px //80
    230px //90
    340px; //100
  grid-template-columns: 600px 600px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "   Chida Beher     " //30
    "   Hizok Gmara     " //35
    "   Hidod  Sipor     " //40
    "PageTitle  PageTitle " //50
    "        Brahot   Bad    " //60
    "        Brahot  Mahane     " //70
    "       Brahot  Yahe  " //80
    "       Brahot  Briha  " //85
    "  Parasha Magic     " //90
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
      <Parasha />
      <OtherLines gridArea="Briha" num={1} listStyle="none" />
      <OtherLines gridArea="Gmara" num={2} listStyle="none" />
      <OtherLines gridArea="Hizok" num={3} listStyle="none" />
      <OtherLines gridArea="Beher" num={4} listStyle="none" />
      <OtherLines gridArea="Hidod" num={5} listStyle="none" />
    </BodyContainer>
  );
};

export default Haparasha;
