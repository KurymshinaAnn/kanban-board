import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
  CardDate,
  CardContent,
  CardButton,
  CardGroup,
  CardItem,
  CardWrapper,
  CardTitle,
} from "./Task.styled";

function TaskSkeleton() {
  return (
    <CardItem>
      <CardWrapper>
        <CardGroup>
          <Skeleton width={80} />
          <CardButton>
            <Skeleton width={10} />
          </CardButton>
        </CardGroup>
        <CardContent>
          <CardTitle>
            <Skeleton width={120} />
          </CardTitle>
          <CardDate>
            <Skeleton width={60} />
          </CardDate>
        </CardContent>
      </CardWrapper>
    </CardItem>
  );
}
export default TaskSkeleton;
