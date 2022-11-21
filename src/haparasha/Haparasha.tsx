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
import Tashbetz from "./Tashbetz";
import Numbers from "./Numbers";

const BodyContainer = styled.div`
  display: grid;
  height: 3270px;
  width: 1200px;
  grid-template-rows: 240px 920px 320px 200px 100px 680px 220px 360px 340px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Title Title"
    "Vort Vort  "
    "  Parasha    Bad  "
    "   Yahe  Chida  "
    "PageTitle  PageTitle "
    "  Brahot Tashbetz     "
    "  Brahot Numbers     "
    "   Sipor  Mahane  "
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
      <Tashbetz />
      <Sipor />
      <Bad />
      <Numbers />
      <Todot />
    </BodyContainer>
  );
};

export default Haparasha;
