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
import Tifzoret from "./Tifzoret";
import Bad from "./Bad";

const BodyContainer = styled.div`
  display: grid;
  height: 3270px;
  width: 1200px;
  grid-template-rows: 240px 950px 200px 290px 100px 750px 270px 200px 400px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Title Title"
    "Vort Vort  "
    " Parasha  Sipor    "
    " Chida   Sipor   "
    "PageTitle  PageTitle "
    "  Brahot Tifzoret     "
    "   Mahane   Bad "
    "   Mahane   Yahe "
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
      <Tifzoret />
      <Sipor />
      <Bad />
      <Todot />
    </BodyContainer>
  );
};

export default Haparasha;
