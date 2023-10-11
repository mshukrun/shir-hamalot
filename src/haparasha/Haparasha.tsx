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
import PageImage from "./PageImage";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    810px //20
    470px //30
    265px //30
    120px //50
    400px //60
    350px //70
    280px //80
    300px //90
    340px; //110
  grid-template-columns: 600px 600px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "   Hizok Gmara     " //30
    "   Bad Chida     " //40
    "PageTitle  PageTitle " //50
    "        Brahot    Mahane     " //60
    "        Brahot   Tora    " //70
    "    Yahe     Paint  " //80
    "   Magic   Parasha    " //90
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

      <OtherLines gridArea="Gmara" num={2} listStyle="none" />
      <OtherLines gridArea="Hizok" num={3} listStyle="none" />

      <OtherLines gridArea="Tora" num={5} listStyle="none" />
      <PageImage gridArea="Paint" />
    </BodyContainer>
  );
};

export default Haparasha;
