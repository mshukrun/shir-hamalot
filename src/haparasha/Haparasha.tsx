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
import Magic from "./Magic";
import Tifzoret from "./Tifzoret";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 250px //10
    800px //20
    390px //30
    120px //50
    300px //60
    320px //70
    420px //80
    300px; //110
  grid-template-columns: 500px 500px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    " Bad Hizok    " //30
    "PageTitle  PageTitle " //50
    " Yahe Parasha   " //60
    " Tora  Chida  " //70
    " Tifzoret  Tifzoret " //80
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
        table={{ left: 150, top: 0 }}
        words={{ top: 50, height: 250, width: 500 }}
      />
      <Chida />

      <OtherLines gridArea="Hizok" num={3} listStyle="none" />
      <OtherLines gridArea="Tora" num={5} listStyle="none" />
    </BodyContainer>
  );
};

export default Haparasha;
