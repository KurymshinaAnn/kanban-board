import { format } from "date-fns";
import ru from "date-fns/locale/ru";

import { StyledDayPicker } from "./Calendar.styled";

function Calendar({ selected, setSelected }) {
  const formatCaption = (month, options) => {
    const oldLabel = format(month, "LLLL yyyy", { locale: options.locale });
    const newLabel =
      oldLabel.charAt(0).toLocaleUpperCase(options.locale) +
      oldLabel.substring(1);
    return <>{newLabel}</>;
  };
  let footer = <p>Пожалуйста выберите дату.</p>;
  if (selected) {
    footer = <p>Срок исполнения: <span className="rdp-tfoot_black">{format(selected, "dd.LL.yy.", { locale: ru })}</span></p>;
  }
  return (
    <StyledDayPicker
      locale={ru}
      mode="single"
      selected={selected}
      onSelect={setSelected}
      formatters={{ formatCaption }}
      footer={footer}
    />
  );
}
export default Calendar;

