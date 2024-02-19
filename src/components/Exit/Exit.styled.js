import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const ExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media (max-width: ${breakpoints.sm}px) {
    padding: 50px 20px;
  }
`;

export const ExitTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`;

// export const ExitForm = styled.form``;

export const ExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.sm}px) {
    display: block;
  }
`;

export const ExitButtonYes = styled.button`
  width: 153px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-right: 10px;

  a {
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: #33399b;
  }

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const ExitButtonNo = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #565eef;

  a {
    width: 100%;
    height: 100%;
    color: #565eef;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: #33399b;

    a {
      color: #ffffff;
    }
  }

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
    height: 40px;
  }
`;
