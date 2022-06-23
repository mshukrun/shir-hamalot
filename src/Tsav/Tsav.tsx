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
import Shmita from "./Shmita";
import Shimha from "./Shimha";
import Tashbetz from "./Tashbetz";
import Magic from "./Magic";

const BodyContainer = styled.div`
  display: grid;
  height: 1900px;
  width: 1300px;
  grid-template-rows: 1.1fr 2.6fr 1.1fr 1.15fr 1.25fr 1.5fr;
  grid-template-columns: 2.5fr 1.7fr;
  grid-template-areas:
    "empty yahe"
    "vort brahot"
    "mahane chida "
    "mahane shmita "
    "magic parasha "
    "sipor todot";
  font-family: "Bona Nova", serif;
  row-gap: 8px;
  column-gap: 8px;
  padding: 32px;
`;

const Tsav = () => {
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
      <Magic />
      <Sipor />
      <Shmita />
      <Todot />
    </BodyContainer>
  );
};

export default Tsav;
