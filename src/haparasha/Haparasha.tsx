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
import Tifzoret from "./Tifzoret";
import OtherTable from "./OtherTable";
import Magic from "./Magic";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 250px //10
    980px //20
    240px //30
    120px //50
    320px //80
    320px //90
    300px //100
    350px; //110
  grid-template-columns: 500px 500px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "  Tora    Tora            " //30
    "PageTitle  PageTitle " //50
    "  Hizok  Hizok    " //80
    "     Parasha   Bad  " //90
    "   Yahe   Magic     " //100
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
      <Magic />

      <OtherLines gridArea="Hizok" num={3} listStyle="none" />
      <OtherLines gridArea="Tora" num={5} listStyle="none" />
    </BodyContainer>
  );
};

export default Haparasha;
