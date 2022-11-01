import React from "react";
import styled from "styled-components";
import Brahot from "./Brahot";
import Chida from "./Chida";
import Mahane from "./Mahane";
import Parasha from "./Parasha";
import Title from "./Title";
import Vort from "./Vort";
import Yahe from "./Yahe";
import Todot from "./Todot";
import PageTitle from "./PageTitle";
import Sipor from "./Sipor";
import Bad from "./Bad";
import Sodoko from "./Sodoko";
import Magic from "./Magic";

const BodyContainer = styled.div`
  display: grid;
  height: 3270px;
  width: 1200px;
  grid-template-rows: 240px 890px 280px 270px 100px 480px 280px 270px 250px 300px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Title Title"
    "Vort Vort  "
    "   Mahane  Parasha  "
    "    Mahane  Chida "
    "PageTitle  PageTitle "
    "  Brahot Sodoko     "
    "  Brahot Yahe     "
    "   Bad   Sipor "
    "   Bad   Magic "
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
      <Parasha />
      <Chida />
      <Sodoko />
      <Sipor />
      <Bad />
      <Magic />
      <Todot />
    </BodyContainer>
  );
};

export default Haparasha;
