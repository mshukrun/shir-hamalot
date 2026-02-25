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
import BlankSpace from "../BlankSpace";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    700px //20
    500px //30
    10px //40
    120px //50
    280px //60
    220px //70
    460px //90
    220px //95
    250px //100
    50px; //110
  grid-template-columns: 500px 500px;
  grid-template-areas: "Title Title" //10
    "Vort Vort  " //20
    "  Hizok Mahane  " //30
    "BlankSpace BlankSpace" //40
    "PageTitle  PageTitle " //50
    " Yahe  Tora   " //60
    " Chida Magic   " //70
    "   Parasha  Bad  " //30
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
      <BlankSpace gridArea="BlankSpace" size={10} />
    </BodyContainer>
  );
};

export default Haparasha;
