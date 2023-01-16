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
import Tifzoret from "./Tifzoret";
import OtherLines from "./OtherLines";

const BodyContainer = styled.div`
  display: grid;
  height: 3460px;
  width: 1400px;
  grid-template-rows: 240px 810px 370px 180px 180px 100px 880px 420px 400px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Title Title"
    "Vort Vort  "
    " Tifzoret  Bad"
    " Numbers  Yahe "
    " Numbers  Chida "
    "PageTitle  PageTitle "
    "  Brahot   Yashir2     "
    "Mahane  Yashir1   "
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
      <Tifzoret />
      <Todot />
      <OtherLines listStyle="none" gridArea="Yashir1" num={1} />
      <OtherLines listStyle="none" gridArea="Yashir2" num={2} />
    </BodyContainer>
  );
};

export default Haparasha;
