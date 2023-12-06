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
import OtherLines from "./OtherLines";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    1520px //20
    400px //30
    185px //40
    120px //50
    465px //60
    275px //70
    230px //80
    275px //90
    135px //100
    340px; //110
  grid-template-columns: 650px 650px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "   Hizok Gmara     " //30
    "   Beher  Beher   " //40
    "PageTitle  PageTitle " //50
    "        Brahot    Mahane     " //60
    "        Brahot   Tora    " //70
    "    Sipor     Yahe  " //80
    "   Magic   Bad    " //90
    "   Briha  Bad   " //100
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
      <Sipor />
      <OtherLines gridArea="Briha" num={1} listStyle="none" />
      <OtherLines gridArea="Gmara" num={2} listStyle="none" />
      <OtherLines gridArea="Hizok" num={3} listStyle="none" />
      <OtherLines gridArea="Beher" num={4} listStyle="none" />
      <OtherLines gridArea="Tora" num={5} listStyle="none" />
    </BodyContainer>
  );
};

export default Haparasha;
