import React from "react";
import styled from "styled-components";
import Mahane from "./Mahane";
import Title from "./Title";
import Vort from "./Vort";
import Yahe from "./Yahe";
import Todot from "./Todot";
import PageTitle from "./PageTitle";
import Bad from "./Bad";
import Numbers from "./Numbers";
import Parasha from "./Parasha";
import Sipor from "./Sipor";
import OtherLines from "./OtherLines";
import Magic from "./Magic";
import OtherSong from "./OtherSong";
import Brahot from "./Brahot";
import Tifzoret from "./Tifzoret";
import NumbersPurim from "./NumbersPurim";

const BodyContainer = styled.div`
  display: grid;
  height: 3270px;
  width: 1300px;
  grid-template-rows: 200px 850px 300px 280px 200px 120px 360px 300px 150px 320px 250px 330px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Title Title"
    "Vort Vort  "
    "  Parasha    Shipurim "
    "  Sipor  Yahe "
    " Numbers     Numbers     "
    "PageTitle  PageTitle "
    "        Brahot  Mahane "
    "        Brahot   Magic"
    " Brahot     Jokes     "
    "  Bad Tifzoret   "
    " Songs NumbersPurim"
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
      <Yahe />
      <Mahane />
      <Bad />
      <Numbers />
      <Todot />
      <Parasha />
      <OtherLines gridArea="Shipurim" num={1} listStyle="number" />
      <OtherSong gridArea="Jokes" num={2} listStyle="none" />
      <Sipor />
      <Magic />
      <Brahot />
      <NumbersPurim />
      <OtherLines num={4} gridArea="Songs" listStyle="none" />
      <Tifzoret />
    </BodyContainer>
  );
};

export default Haparasha;
