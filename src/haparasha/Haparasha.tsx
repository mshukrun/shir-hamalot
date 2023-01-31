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
import IdanSong from "./IdanSong";

const BodyContainer = styled.div`
  display: grid;
  height: 3080px;
  width: 1200px;
  grid-template-rows: 240px 800px 650px 400px 950px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Title Title"
    "IdanSong1 IdanSong2  "
    "IdanSong1 IdanSong3  "
    "IdanSong5 IdanSong3  "
    "IdanSong5 IdanSong4  ";
  font-family: "Bona Nova", serif;
  row-gap: 8px;
  column-gap: 8px;
  padding: 32px;
`;

const Haparasha = () => {
  return (
    <BodyContainer>
      <Title />
      <IdanSong num={1} gridArea="IdanSong1" />
      <IdanSong num={2} gridArea="IdanSong2" />
      <IdanSong num={3} gridArea="IdanSong3" />
      <IdanSong num={4} gridArea="IdanSong4" />
      <IdanSong num={5} gridArea="IdanSong5" />
    </BodyContainer>
  );
};

export default Haparasha;
