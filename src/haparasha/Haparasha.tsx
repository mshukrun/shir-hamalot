import React from "react";
import styled from "styled-components";
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
    890px //20
    350px //30
    50px //40
    120px //50
    240px //60
    220px //70
    220px //80
    300px //90
    170px //95
    255px; //100
  grid-template-columns: 525px 525px;
  grid-template-areas:
    "Title Title" //10
    "Vort Vort  " //20
    "   Tora  Bad  " //30
    " Contact Contact " //110
    /* "BlankSpace BlankSpace" //40 */
    "PageTitle  PageTitle " //50
    " Parasha Hizok    " //60
    "  Parasha  Hizok  " //70
    " Chida Magic   " //80
    "   Yahe  Shiraim  " //90
    " FW  RIP   " //95
    " Pitaron Pitaron   "; // 100

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
      <Bad />
      <Magic />
      <Parasha />
      <Chida />
      <OtherLines gridArea="Hizok" num={3} />
      <OtherLines gridArea="Tora" num={5} />
      <OtherLines gridArea="Shiraim" num={6} />
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
      <BlankSpace gridArea="BlankSpace" size={20} />
    </BodyContainer>
  );
};

export default Haparasha;
