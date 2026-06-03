import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Yahe from "./Yahe";
import PageTitle from "./PageTitle";
import OtherLines from "./OtherLines";
import Chida from "./Chida";
import Parasha from "./Parasha";
import Pitaron from "./Pitaron";
import CommonFrameWithoutTitle from "../CommonFrameWithoutTitle";
import l10n from "./l10n.json";
import Magic from "./Magic";
import Vort from "./Vort";
import BlankSpace from "../BlankSpace";
import VortShir from "./VortShir";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    1040px //20
    260px //30
    10px //40
    120px //50
    330px //60
    190px //70
    340px //80
    80px //90
    200px //95
    220px //100
    50px; //110
  grid-template-columns: 500px 550px;
  grid-template-areas: "Title Title" //10
    "VortShir VortShir  " //20
    " Magic    Parasha " //30
    "BlankSpace BlankSpace" //40
    "PageTitle  PageTitle " //50
    " Yahe   Sahir  " //60
    " Chida  Sahir   " //70
    "   Tora  Hizok  " //80
    "   Shiraim  Shiraim  " //90
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
      <VortShir height={930} width={1000} />
      <Yahe padding={10} />
      <Magic />
      <Parasha />
      <Chida />
      <OtherLines gridArea="Sahir" num={1} padding={10} />
      <OtherLines gridArea="Hizok" num={3} padding={10} />
      <OtherLines gridArea="Tora" num={5} />
      <OtherLines gridArea="Shiraim" num={6} padding={10} />
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
