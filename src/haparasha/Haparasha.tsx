import React from "react";
import styled from "styled-components";
import Brahot from "./Brahot";
import Chida from "./Chida";
import Mahane from "./Mahane";
import Title from "./Title";
import Vort from "./Vort";
import Yahe from "./Yahe";
import Todot from "./Todot";
import PageTitle from "./PageTitle";
import Sipor from "./Sipor";
import Bad from "./Bad";
import Numbers from "./Numbers";
import Magic from "./Magic";
import Tifzoret from "./Tifzoret";
import OtherLines from "./OtherLines";

const BodyContainer = styled.div`
  display: grid;
  height: 3460px;
  width: 1300px;
  grid-template-rows: 240px 1150px 200px 240px 100px 440px 400px 330px 280px 300px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Title Title"
    "Vort Vort  "
    " Bilbol Chida"
    " Bilbol    Magic    "
    "PageTitle  PageTitle "
    "  Brahot   Tifzoret     "
    "  Brahot Bad        "
    "Mahane Sipor     "
    "  Yahe   Numbers  "
    " Todot Todot  ";
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
      <Brahot />
      <Yahe />
      <Mahane />
      <Chida />
      <Magic />
      <Sipor />
      <Bad />
      <Numbers />
      <Tifzoret />
      <Todot />
      <OtherLines listStyle="none" gridArea="Bilbol" num={1} />
    </BodyContainer>
  );
};

export default Haparasha;
