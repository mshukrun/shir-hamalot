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

const BodyContainer = styled.div`
  display: grid;
  height: 3080px;
  width: 1200px;
  grid-template-rows: 220px 970px 300px 250px 120px 400px 250px 200px 380px 350px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Title Title"
    "Vort Vort  "
    "  Yahe   Shririm "
    "  Sipor   Parasha"
    "PageTitle  PageTitle "
    "  Mahane      Shiron   "
    "  Magic      Shiron   "
    " Chida    Shiron     "
    "  Bad Numbers   "
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
    </BodyContainer>
  );
};

export default Haparasha;
