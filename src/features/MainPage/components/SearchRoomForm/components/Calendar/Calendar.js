import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import "moment/locale/pl";
import moment from "moment";

import MomentLocaleUtils, {
  formatDate,
  parseDate
} from "react-day-picker/moment";

const Calendar = props => {
  const handleChange = e => {
    const dateTime = moment(e).format("YYYY-MM-DD");
    props.getRoomDate(dateTime, props.name);
  };
  return (
    <div className="input-with-icon">
      <i className="input-with-icon__icon far fa-calendar-alt" />
      <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
        onDayChange={handleChange}
        name={props.name}
        inputProps={{
          className: "input-with-icon__input",
          readOnly: true
        }}
        format="LL"
        placeholder={`${props.placeholder}`}
        dayPickerProps={{
          locale: "pl",
          localeUtils: MomentLocaleUtils,
          disabledDays: { before: new Date() }
        }}
      />
    </div>
  );
};

export default Calendar;
