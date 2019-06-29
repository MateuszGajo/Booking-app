import React, { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import "moment/locale/pl";

import MomentLocaleUtils, {
  formatDate,
  parseDate
} from "react-day-picker/moment";

const Calendar = props => {
  return (
    <div className="input-with-icon">
      <i class="far fa-calendar-alt" />
      <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
        format="LL"
        placeholder={`${props.placeholder}`}
        dayPickerProps={{
          locale: "pl",
          localeUtils: MomentLocaleUtils
        }}
      />
    </div>
  );
};

export default Calendar;
