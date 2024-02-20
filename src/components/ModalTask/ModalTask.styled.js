import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const BrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
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

export const BrowseContent = styled.div`
  display: block;
  text-align: left;

  @media (max-width: ${breakpoints.md}px) {
    margin-bottom: 20px;
  }
`;

export const BrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const BrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const BrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const BrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: ${breakpoints.lg}px) {
    display: block;
  }
`;

export const BrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.md}px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
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
    height: 37px;
  }
`;

export const BrowseButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: ${breakpoints.md}px) {
    margin-right: 0px;
  }
`;

export const ButtonGroup = styled.div`
  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
  }
`;

export const ButtonEdit = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  margin-right: 8px;

  a {
    color: #565eef;
  }

  a:visited {
    color: #565eef;
  }

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }

  &:hover a {
    color: #ffffff;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    height: 40px;

    &:hover {
      background: transparent;
      color: #565eef;
    }

    &:hover a {
      color: #565eef;
    }
  }
`;

export const ButtonDelete = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;

  a {
    color: #565eef;
  }

  a:visited {
    color: #565eef;
  }

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }

  &:hover a {
    color: #ffffff;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    height: 40px;

    &:hover {
      background: transparent;
      color: #565eef;
    }

    &:hover a {
      color: #565eef;
    }
  }
`;

export const ButtonClose = styled.button`
  width: auto;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  padding: 0px 10px;
  outline: none;

  a {
    color: #ffffff;
  }

  &:hover {
    background-color: #33399b;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    height: 40px;
  }
`;

export const StatusTitle = styled.p`
  margin-bottom: 14px;

  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  display: ${(props) => (props.$enabled ? "block" : "none")};
  background: ${(props) => (props.$selected ? "#94A6BE" : "inherit")};
  color: ${(props) => (props.$selected ? "#FFFFFF" : "#94a6be")};

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    background: ${(props) => (props.$selected ? "#94A6BE" : "inherit")};
    color: ${(props) => (props.$selected ? "#FFFFFF" : "inherit")};
  }
`;
