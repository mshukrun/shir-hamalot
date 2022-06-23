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

const BodyContainer = styled.div`
  display: grid;
  height: 2100px;
  width: 1450px;
  grid-template-rows: 1.25fr 2.7fr 1fr 1.25fr 1.25fr 1fr 1.66fr;
  grid-template-columns: 2.5fr 1.7fr;
  grid-template-areas:
    "empty yahe"
    "vort brahot"
    "mahane chida "
    "mahane shmita "
    "tashbetz parasha "
    "tashbetz shimha "
    "sipor todot";
  font-family: "Bona Nova", serif;
  row-gap: 8px;
  column-gap: 8px;
  padding: 32px;
`;

const Pikode = () => {
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
      <Tashbetz />
      <Sipor />
      <Shmita />
      <Shimha />
      <Todot />
    </BodyContainer>
  );
};

export default Pikode;
