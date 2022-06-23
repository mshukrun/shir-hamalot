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
import Todot from "./Todot";
import Tifzoret from "./Tifzoret";
import Shmita from "./Shmita";
import PageTitle from "./PageTitle";

const BodyContainer = styled.div`
  display: grid;
  height: 2900px;
  width: 1000px;
  grid-template-rows: 0.6fr 1.1fr 0.9fr 0.9fr 0.1fr 0.2fr 1fr 1fr 0.6fr 0.6fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title title"
    "vort vort  "
    " brahot chida  "
    " brahot yahe   "
    "empty  empty "
    "PageTitle  PageTitle "
    "  mahane  shmita "
    "parasha  tifzoret "
    "sipor   sipor "
    " todot todot  ";
  font-family: "Bona Nova", serif;
  row-gap: 8px;
  column-gap: 8px;
  padding: 32px;
`;

const Behokotie = () => {
  return (
    <BodyContainer>
      <Title />
      <Vort />
      <Brahot />
      <Yahe />
      <Mahane />
      <Parasha />
      <Chida />
      <Sipor />
      <Todot />
      <Shmita />
      <Tifzoret />
      <PageTitle />
    </BodyContainer>
  );
};

export default Behokotie;
