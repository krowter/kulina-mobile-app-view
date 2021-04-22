import React from "react";

import { DatesContainer } from "./components";
import { CircularDate } from "../blocks/CircularDate";
import { formatTime } from "../../helpers";

export const Dates = () => {
  const disabledDays = ["Sab", "Min"];
  const today = new Date();
  const dates = [];
  for (let i = 12; i < 26; i++) {
    today.setDate(i);

    dates.push(formatTime(today.toString(), {}));
  }

  return (
    <DatesContainer>
      {dates.map((_date, i) => {
        const [day, date] = _date.split(",");

        return (
          <CircularDate
            key={i}
            isActive={false}
            disabled={disabledDays.includes(day)}
          >
            <span>{day}</span>
            <span>{date}</span>
          </CircularDate>
        );
      })}
    </DatesContainer>
  );
};
