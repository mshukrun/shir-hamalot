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
    790px //20
    230px //30
    220px //40
    120px //50
    370px //60
    200px //70
    330px //90
    150px //95
    250px //100
    50px; //110
  grid-template-columns: 500px 500px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "   Parasha  Hizok " //30
    "   Magic  Hizok   " //40
    "PageTitle  PageTitle " //50
    " Yahe Tora   " //60
    " Chida Mahane   " //70
    "  Bad Mahane  " //90
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
      <Magic />
      <Parasha />
      <Chida />
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
