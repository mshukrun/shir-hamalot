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
import Magic from "./Magic";

const BodyContainer = styled.div`
  display: grid;
  height: 1900px;
  width: 1300px;
  grid-template-rows: 1.4fr 3fr 1fr 1.5fr 1fr 1fr 1.5fr;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    "empty brahot"
    "vort brahot  "
    "magic  yahe  "
    "mahane  parasha "
    "mahane   shmita "
    " sipor chida  "
    " sipor todot  ";
  font-family: "Bona Nova", serif;
  row-gap: 8px;
  column-gap: 8px;
  padding: 32px;
`;

const Emoor = () => {
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
      <Magic />
    </BodyContainer>
  );
};

export default Emoor;
