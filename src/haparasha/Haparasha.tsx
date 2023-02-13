import React from "react";
import styled from "styled-components";
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
import Sipor from "./Sipor";
import OtherLines from "./OtherLines";
import Magic from "./Magic";
import OtherSong from "./OtherSong";
import Brahot from "./Brahot";
import FindWords from "./FindWords";
import IdanSong from "./IdanSong";

const BodyContainer = styled.div`
  display: grid;
  height: 3270px;
  width: 1300px;
  grid-template-rows: 200px 850px 300px 280px 270px 120px 330px 320px 320px 390px 170px 270px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Title Title"
    "Vort Vort  "
    "  Parasha    Shririm "
    "  Sipor  Yahe "
    " Numbers     Numbers     "
    "PageTitle  PageTitle "
    "        Brahot  Mahane "
    "        Brahot   Magic"
    " Bad     Shiron     "
    "  IdanSong FindWords   "
    " IdanSong Chida"
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
      <Chida />
      <Bad />
      <Numbers />
      <Todot />
      <Parasha />
      <OtherLines gridArea="Shririm" num={1} listStyle="none" />
      <OtherSong gridArea="Shiron" num={2} listStyle="none" />
      <Sipor />
      <Magic />
      <Brahot />
      <FindWords />
      <IdanSong num={4} gridArea="IdanSong" />
    </BodyContainer>
  );
};

export default Haparasha;
