
import { CardTheme, ThemeLabelText } from "./Task.styled";

// const colors = {
//   "Web Design": "_orange",
//   Research: "_green",
//   Copywriting: "_purple",
// };

function ThemeLabel({ theme }) {

  let color;
  switch (theme) {
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
    <CardTheme $themeColor={color} >
      <ThemeLabelText>{theme}</ThemeLabelText>
    </CardTheme>
  );
}
export default ThemeLabel;
 