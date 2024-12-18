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
  grid-template-rows: 250px //10
    1040px //20
    200px //30
    120px //50
    510px //60
    290px //80
    250px //90
    300px; //110
  grid-template-columns: 500px 500px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    " Chida   Yahe  " //30
    "PageTitle  PageTitle " //50
    "  Hizok   Tifzoret     " //60
    "  Parasha    Tora    " //80
    "    Bad     Magic   " //90
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
        table={{ left: 5, top: 70 }}
        words={{ top: 220, width: 500, height: 200 }}
      />
      <Chida />
      <Magic />
      <OtherLines gridArea="Hizok" num={3} listStyle="none" />
      <OtherLines gridArea="Tora" num={5} listStyle="none" />
    </BodyContainer>
  );
};

export default Haparasha;
