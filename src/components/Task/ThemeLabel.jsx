import { CardTheme, ThemeLabelText } from "./Task.styled";

// const colors = {
//   "Web Design": "_orange",
//   Research: "_green",
//   Copywriting: "_purple",
// };

function ThemeLabel({ topic, large = false }) {
  let color;
  switch (topic) {
    case "Web Design":
      color = "_orange";
      break;

    case "Research":
      color = "_green";
      break;

    case "Copywriting":
      color = "_purple";
      break;

    default:
      color = "_gray";
      break;
  }

  return (
    <CardTheme $large={large} $themeColor={color}>
      <ThemeLabelText $large={large}>{topic}</ThemeLabelText>
    </CardTheme>
  );
}
export default ThemeLabel;
