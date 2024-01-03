import React from "react";
import styled from "styled-components";
import Mahane from "./Mahane";
import Title from "./Title";
import Vort from "./Vort";
import Todot from "./Todot";
import PageTitle from "./PageTitle";
import Bad from "./Bad";
import OtherLines from "./OtherLines";
import Chida from "./Chida";
import Parasha from "./Parasha";
import PageImage from "./PageImage";
import Tifzoret from "./Tifzoret";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1100px;
  grid-template-rows: 220px //10
    1120px //20
    250px //30
    120px //50
    400px //60
    370px //70
    480px //90
    260px; //110
  grid-template-columns: 550px 550px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "    Parasha    Chida " //30
    "PageTitle  PageTitle " //50
    "        Hizok    Mahane     " //60
    "        Gmara   Bad    " //70
    "   Paint   Tifzoret    " //90
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
      <Mahane />
      <Bad />
      <Todot />
      <Chida />
      <Parasha />
      <Tifzoret table={{ left: 50 }} words={{ top: 300 }} />

      <OtherLines gridArea="Gmara" num={2} listStyle="none" />
      <OtherLines gridArea="Hizok" num={3} listStyle="none" />
      <PageImage gridArea="Paint" />
    </BodyContainer>
  );
};

export default Haparasha;
