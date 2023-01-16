import React from "react";
import styled from "styled-components";
import l10n from "./l10n.json";
import { BasicBox, PageNumberDiv } from "../Common";
import ComplexTitle from "../ComplexTitle";

const TitleBox = styled(BasicBox)`
  grid-area: PageTitle;
  position: relative;
  border: none;
  min-height: 500px;
`;

const PageTitle = () => {
  return (
    <TitleBox dir="RTL">
      <PageNumberDiv>{l10n.title.amod + " -2-"}</PageNumberDiv>
      <ComplexTitle
        title={l10n.title.shir + " " + l10n.title.hamahalot}
        subtitle={l10n.title.parasha}
      />
    </TitleBox>
  );
};

export default PageTitle;
