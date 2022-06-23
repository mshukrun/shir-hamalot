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
  height: 1500px;
  width: 1000px;
  grid-template-rows: 2fr 4fr 4fr 2fr;
  grid-template-columns: 2fr;
  grid-template-areas:
    "empty"
    "vort"
    "mahane"
    "todot";
  font-family: "Bona Nova", serif;
  row-gap: 8px;
  column-gap: 8px;
  padding: 32px;
`;

const KiTishaY = () => {
  return (
    <BodyContainer>
      <Title />
      <NoRead />
      <Vort />
      <Mahane />
      <Todot />
    </BodyContainer>
  );
};

export default KiTishaY;
