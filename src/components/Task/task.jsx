import { Link } from "react-router-dom";

import ThemeLabel from "./ThemeLabel";
import {
  CardDate,
  CardContent,
  CardButton,
  CardGroup,
  CardItem,
  CardWrapper,
  CardTitle,
} from "./Task.styled";
import { appRoutes } from "../../lib/appRoutes";

function Task({ task, id }) {
  return (
    <CardItem>
      <CardWrapper>
        <CardGroup>
          <ThemeLabel topic={task.topic} />
          <a href="#popBrowse" target="_self">
            <CardButton>
              <div></div>
              <div></div>
              <div></div>
            </CardButton>
          </a>
        </CardGroup>
        <CardContent>
          <Link to={`${appRoutes.TASK}/${id}`}>
            <CardTitle>{task.title}</CardTitle>
          </Link>
          <CardDate>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <g clipPath="url(#clip0_1_415)">
                <path
                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>{task.date}</p>
          </CardDate>
        </CardContent>
      </CardWrapper>
    </CardItem>
  );
}
export default Task;
