import React from "react";
import styled from "styled-components";
import Brahot from "./Brahot";
import Chida from "./Chida";
import Mahane from "./Mahane";
import Parasha from "./Parasha";
import Sipor from "./Sipor";
import Title from "./Title";
import Vort from "./Vort";
import Yahe from "./Yahe";
import NoRead from "./NoRead";
import Todot from "./Todot";
import Tifzoret from "./Tifzoret";
import Shmita from "./Shmita";
import Pesach from "./Pesach";

const BodyContainer = styled.div`
  display: grid;
  height: 2100px;
  width: 1500px;
  grid-template-rows: 2fr 3.5fr 2.4fr 3.4fr 3.6fr 1.6fr;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    "empty brahot"
    "vort brahot  "
    "pesach  yahe  "
    "mahane  parasha "
    "sipor   shmita "
    " todot chida  ";
  font-family: "Bona Nova", serif;
  row-gap: 8px;
  column-gap: 8px;
  padding: 32px;
`;

const AcheriMot = () => {
  return (
    <BodyContainer>
      <Title />
      <NoRead />
      <Vort />
      <Brahot />
      <Yahe />
      <Mahane />
      <Parasha />
      <Chida />
      <Sipor />
      <Todot />
      <Shmita />
      <Pesach />
    </BodyContainer>
  );
};

export default AcheriMot;
