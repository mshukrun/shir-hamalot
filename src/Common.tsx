import styled, { css } from "styled-components";

export const TitleText = css`
  font-weight: 800;
  font-size: 45px;
  line-height: 45px;
`;

export const SubTitleText = css`
  font-weight: 800;
  font-size: 30px;
  line-height: 45px;
`;

export const TinyText = css`
  font-family: "Open Sans", serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

export const TinyPlusText = css`
  font-family: "Open Sans", serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

export const SmallText = css`
  font-family: "Open Sans", serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

export const RegularText = css`
  font-family: "Open Sans", serif;
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
`;

export const RegularPlusText = css`
  font-family: "Open Sans", serif;
  font-weight: 500;
  font-size: 23px;
  line-height: 27px;
`;

export const SubMediumText = css`
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
`;

export const MediumText = css`
  font-weight: 600;
  font-size: 30px;
  line-height: 34px;
`;

export const DavidMediumText = css`
  font-family: "David Libre", serif;
  font-weight: 600;
  font-size: 30px;
  line-height: 34px;
`;

export const DavidRegularText = css`
  font-family: "David Libre", serif;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
`;

export const BasicBox = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  position: relative;
  flex-flow: column;
  justify-content: flex-start;
`;

export const TitleDiv = styled.div`
  ${TitleText}
  margin: 10px auto;
`;

export const SubtitleDiv = styled.div`
  ${SubTitleText}
  margin: 10px auto;
`;

export const PageNumberDiv = styled.div`
  ${SubMediumText}
  width: 100%;
  text-align: center;
`;
