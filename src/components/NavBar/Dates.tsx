import React from "react";

import { DatesContainer } from "./components";
import { CircularDate } from "../blocks/CircularDate";
import { formatTime } from "../../helpers";

export const Dates = () => {
  const today = new Date();
  const dates = [];
  for (let i = 12; i < 20; i++) {
    today.setDate(i);

    dates.push(formatTime(today.toString(), {}));
  }

  return (
    <DatesContainer>
      {dates.map((_date) => {
        const [day, date] = _date.split(",");

        return (
          <CircularDate isActive={false}>
            <span>{day}</span>
            <span>{date}</span>
          </CircularDate>
        );
      })}
    </DatesContainer>
  );
};
