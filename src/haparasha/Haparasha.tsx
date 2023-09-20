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
import OtherLines from "./OtherLines";
import Chida from "./Chida";
import Parasha from "./Parasha";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    880px //20
    350px //30
    430px //40
    120px //50
    190px //60
    290px //65
    265px //70
    235px //90
    210px //100
    305px; //110
  grid-template-columns: 650px 650px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "   Bad Gmara     " //30
    "   Mahane   Hizok   " //40
    "PageTitle  PageTitle " //50
    "        Brahot    Ashreno     " //60
    "        Brahot    Parasha     " //65
    "        Brahot   Yahe    " //70
    "   Magic   Tora    " //90
    "  Beher    Chida  " //100
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
      <Brahot />
      <Magic />
      <Todot />
      <Chida />
      <Parasha />
      <OtherLines gridArea="Ashreno" num={1} listStyle="none" />
      <OtherLines gridArea="Gmara" num={2} listStyle="none" />
      <OtherLines gridArea="Hizok" num={3} listStyle="none" />
      <OtherLines gridArea="Beher" num={4} listStyle="none" />
      <OtherLines gridArea="Tora" num={5} listStyle="none" />
    </BodyContainer>
  );
};

export default Haparasha;
