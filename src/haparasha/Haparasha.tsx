import React from "react";
import styled from "styled-components";
import Mahane from "./Mahane";
import Title from "./Title";
import Yahe from "./Yahe";
import PageTitle from "./PageTitle";
import Bad from "./Bad";
import OtherLines from "./OtherLines";
import Chida from "./Chida";
import Parasha from "./Parasha";
import Pitaron from "./Pitaron";
import CommonFrameWithoutTitle from "../CommonFrameWithoutTitle";
import l10n from "./l10n.json";
import Magic from "./Magic";
import Vort from "./Vort";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    1030px //20
    350px //30
    120px //50
    460px //60
    180px //80
    220px //90
    230px //95
    260px //100
    50px; //110
  grid-template-columns: 550px 550px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    " Tora Bad  " //30
    "PageTitle  PageTitle " //50
    " Hizok   Mahane  " //60
    " Parasha Yahe  " //80
    " Chida  Magic   " //90
    " FW  RIP   " //95
    " Pitaron Pitaron   " // 100
    " Contact Contact "; //110
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
      <Pitaron />
      <Vort />
      <Yahe />
      <Mahane />
      <Bad />

      <Parasha />
      <Chida />
      <Magic />

      <OtherLines gridArea="Hizok" num={3} />
      <OtherLines gridArea="Tora" num={5} />
      <CommonFrameWithoutTitle gridArea="Contact" content={l10n.contact} />
      <CommonFrameWithoutTitle
        gridArea="RIP"
        content={l10n.rip}
        fontSize={20}
      />
      <CommonFrameWithoutTitle
        gridArea="FW"
        content={l10n.fw}
        fontSize={30}
        gniza={true}
      />
    </BodyContainer>
  );
};

export default Haparasha;
