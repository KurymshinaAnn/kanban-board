import { DayPicker } from "react-day-picker";
import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const StyledDayPicker = styled(DayPicker)`
  .rdp-caption {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
    padding-left: 7px;
  }
  .rdp-caption_label {
    color: #94a6be;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
  }

  .rdp-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .rdp-nav_button {
    width: 18px;
    height: 25px;
    background-color: transparent;
    border: none;
    color: #94a6be;
  }

  /* блок с неделями датами и нижней подписью */

  .rdp-table {
    margin-bottom: 12px;

    @media (max-width: ${breakpoints.lg}px) {
      width: 100%;
    }
  }

  /* наименование дня недели */

  .rdp-head_row {
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;
    padding: 0 7px;
  }

  .rdp-head_cell {
    color: #94a6be;
    font-size: 10px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;
    text-align: center;

    @media (max-width: ${breakpoints.lg}px) {
      
      font-size: 16px;
    }
  }

  /* цифры недели */

  .rdp-cell {
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.2px;
    cursor: pointer;
  }

  .rdp-day {
    width: 21px;
    height: 22px;
    margin: 2px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    color: #94a6be;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.2px;
    cursor: pointer;

    @media (max-width: ${breakpoints.lg}px) {
      width: 48px;
      height: 48px;
      font-size: 14px;
    }
  }

  .rdp-day:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }

  .rdp-day_selected {
    border: none;
    background-color: #94a6be;
    color: #ffffff;
  }

  .rdp-day_selected:hover {
    border: none;
    background-color: #94a6be;
    color: #ffffff;
  }

  .rdp-day_today {
    font-weight: 700;
  }

  /* подпись снизу календаря */

  .rdp-tfoot p {
    color: #94a6be;
    font-size: 10px;
    line-height: 1;
    padding: 0 6px;
  }

  .rdp-tfoot_black {
    color: #000000;
  }
`;
