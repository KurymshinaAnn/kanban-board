const colors = {
  "Web Design": "_orange",
  Research: "_green",
  Copywriting: "_purple",
};

function ThemeLabel({ theme }) {
  return (
    <div className={`card__theme ${colors[theme]}`}>
      <p className={colors[theme]}>{theme}</p>
    </div>
  );
}
export default ThemeLabel;
