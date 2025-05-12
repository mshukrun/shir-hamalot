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
import VortShir from "./VortShir";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    1120px //20
    260px //30
    120px //50
    500px //60
    220px //80
    300px //90
    210px //95
    200px //100
    50px; //110
  grid-template-columns: 550px 550px;
  grid-template-areas: "Title Title" //10
    "VortShir VortShir  " //20
    " Yahe  Bad " //30
    "PageTitle  PageTitle " //50
    " Tora Mahane  " //60
    " Parasha Chida " //80
    " Hizok  Hizok   " //90
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
      <VortShir height={960} width={1150} top={1} />
      <Yahe />
      <Mahane />
      <Bad />

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
