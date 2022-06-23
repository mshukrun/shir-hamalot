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
import Pitaron from "./Pitaron";
import Todot from "./Todot";
import Tifzoret from "./Tifzoret";
import Shmita from "./Shmita";

const BodyContainer = styled.div`
  display: grid;
  height: 1900px;
  width: 1300px;
  grid-template-rows: 2fr 3.3fr 0.5fr 1fr 2.4fr 1.1fr 0.5fr 2.2fr 0.6fr 1fr;
  grid-template-columns: 2.5fr 2fr;
  grid-template-areas:
    "empty yahe"
    "vort brahot"
    "chida brahot"
    "chida mahane"
    "shmita mahane"
    "shmita tifzoret"
    "parasha tifzoret"
    "sipor tifzoret"
    "sipor todot"
    "pitaron todot";
  font-family: "Bona Nova", serif;
  row-gap: 8px;
  column-gap: 8px;
  padding: 32px;
`;

const KiTisha = () => {
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
      <Tifzoret />
      <Sipor />
      <Shmita />
      <Pitaron />
      <Todot />
    </BodyContainer>
  );
};

export default KiTisha;
