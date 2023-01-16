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
import Bad from "./Bad";
import Numbers from "./Numbers";
import Parasha from "./Parasha";
import OtherParasha from "./OtherParasha";
import Sipor from "./Sipor";

const BodyContainer = styled.div`
  display: grid;
  height: 3080px;
  width: 1200px;
  grid-template-rows: 240px 990px 200px 250px 120px 430px 380px 350px 350px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Title Title"
    "Vort Vort  "
    "   Chida OtherParasha"
    "   Parasha Yahe"
    "PageTitle  PageTitle "
    "  Mahane    Brahot     "
    "  Bad   Brahot     "
    "Sipor  Numbers   "
    " Todot Todot   ";
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
      <Bad />
      <Numbers />
      <Todot />
      <Parasha />
      <OtherParasha />
      <Sipor />
    </BodyContainer>
  );
};

export default Haparasha;
