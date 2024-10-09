import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Vort from "./Vort";
import Yahe from "./Yahe";
import Todot from "./Todot";
import PageTitle from "./PageTitle";
import Bad from "./Bad";
import OtherLines from "./OtherLines";
import Chida from "./Chida";
import Parasha from "./Parasha";
import Tifzoret from "./Tifzoret";
import Magic from "./Magic";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    1400px //20
    260px //30
    120px //50
    330px //60
    590px //80
    400px //100
    350px; //110
  grid-template-columns: 650px 650px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "     Yahe    Chida       " //30
    "PageTitle  PageTitle " //50
    "  Bad          Tora     " //60
    "  Parasha    Tifzoret    " //80
    "   Hizok   Magic     " //100
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
      <Bad />
      <Todot />
      <Parasha />
      <Tifzoret
        table={{ left: 95, top: 70 }}
        words={{ top: 370, height: 150, width: 700 }}
      />
      <Chida />
      <Magic />
      <OtherLines gridArea="Hizok" num={3} listStyle="none" />
      <OtherLines gridArea="Tora" num={5} listStyle="none" />
    </BodyContainer>
  );
};

export default Haparasha;
