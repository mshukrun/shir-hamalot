import React from "react";
import styled from "styled-components";
import l10n from "./l10n.json";
import { BasicBox, PageNumberDiv } from "../Common";
import ComplexTitle from "../ComplexTitle";

const TitleBox = styled(BasicBox)`
  position: relative;
  border: none;
  min-height: 500px;
  gap: 16px;
`;

const PageTitle: React.FC<{
  gridArea?: string;
  pageNum?: number;
}> = ({ gridArea = "PageTitle", pageNum = 2 }) => {
  return (
    <TitleBox dir="RTL" style={{ gridArea: gridArea }}>
      <PageNumberDiv>{`${l10n.title.amod} -${pageNum}-`}</PageNumberDiv>
      <ComplexTitle
        title={l10n.title.shir + " " + l10n.title.hamahalot}
        subtitle={l10n.title.parasha}
      />
    </TitleBox>
  );
};

export default PageTitle;
