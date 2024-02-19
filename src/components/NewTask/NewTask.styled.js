import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const NewCardBlock = styled.div`
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media (max-width: ${breakpoints.lg}px) {
    border-radius: 0;
  }

  @media (max-width: ${breakpoints.md}px) {
    padding: 20px 16px 32px;
  }
`;

export const NewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const NewCardTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const NewCardClose = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;

  :hover {
    color: #000000;
  }
`;

export const NewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: ${breakpoints.lg}px) {
    display: block;
  }
`;

export const NewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.md}px) {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`;

export const CardCalendarBlock = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
  }
`;

export const CardCalendar = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;

  margin-bottom: 14px;
  padding: 0 7px;
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 14px 0px;
`;

export const FormNewArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  resize: none;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: rgba(148, 166, 190);

  @media (max-width: ${breakpoints.md}px) {
    max-width: 100%;
    height: 34px;
  }
`;

// календарь

export const FormNewCreate = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;

  &:hover {
    background-color: #33399b;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    height: 40px;
  }
`;

export const NewCardCategories = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesSubTitle = styled.p`
  font-weight: 600;
  margin-bottom: 14px;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CategoriesTheme = styled.div`
  input[type="radio"] {
    display: none;
  }
`;

export const CategoriesLabel = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${(props) => (props.$active ? 1 : 0.4)};
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;

export const OrangeLabel = styled(CategoriesLabel)`
  background-color: #ffe4c2;
  color: #ff6d00;

  &:hover {
    opacity: 1;
  }
`;
export const GreenLabel = styled(CategoriesLabel)`
  background-color: #b4fdd1;
  color: #06b16e;

  &:hover {
    opacity: 1;
  }
`;

export const PurpleLabel = styled(CategoriesLabel)`
  background-color: #e9d4ff;
  color: #9a48f1;

  &:hover {
    opacity: 1;
  }
`;

export const GrayLabel = styled(CategoriesLabel)`
  background: #94a6be;
  color: #ffffff;

  &:hover {
    opacity: 1;
  }
`;
