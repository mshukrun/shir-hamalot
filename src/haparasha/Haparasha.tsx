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
import OtherSong from "./OtherSong";
import OtherShir from "./OtherShir";
import Tifzoret from "./Tifzoret";
import Magic from "./Magic";

const BodyContainer = styled.div`
  display: grid;
  height: 2800px;
  width: 1200px;
  grid-template-rows: 220px //10
    920px //20
    460px //30
    120px //50
    650px //55
    250px //60
    250px //70
    150px //80
    210px //85
    120px //86
    700px //90
    200px //93
    380px //94
    220px //95
    120px //99
    320px //100
    50px; //110
  grid-template-columns: 550px 550px;
  grid-template-areas: "Title Title" //10
    "VortShir VortShir  " //20
    " Parasha  Mahane  " //30
    "PageTitle  PageTitle " //50
    " Mahalon  Mahalon   " //55
    " Tora Bad  " //60
    " Chida Bad  " //70
    " Yahe Bilbol " //80
    " Yahe Bakasha " //85
    "PageTitle3  PageTitle3 " //86
    " Tifzoret  Tifzoret   " //90
    " Gil   Gil   " //93
    " Hizok  Magic   " //94
    " FW  RIP   " //95
    "PageTitle4  PageTitle4 " //99
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
      <PageTitle gridArea="PageTitle3" pageNum={3} />
      <PageTitle gridArea="PageTitle4" pageNum={4} />
      <Pitaron />
      <VortShir height={790} width={1150} top={1} />
      <Yahe />
      <Mahane />
      <Bad />
      <Tifzoret words={{ right: 40, width: 300 }} table={{ left: 150 }} />
      <Magic />
      <Parasha />
      <Chida />
      <OtherLines gridArea="Gil" num={1} />
      <OtherShir gridArea="Mahalon" num={2} height={600} width={1100} />
      <OtherLines gridArea="Hizok" num={3} />
      <OtherLines gridArea="Bilbol" num={4} />
      <OtherLines gridArea="Tora" num={5} />
      <OtherLines gridArea="Bakasha" num={6} />
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
