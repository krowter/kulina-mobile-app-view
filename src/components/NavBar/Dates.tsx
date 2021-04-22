import React from "react";
import { connect } from "react-redux";

import { DatesContainer } from "./components";
import { CircularDate } from "../blocks/CircularDate";
import { formatTime, isSameDay } from "../../helpers";

import { changeDate } from "../../redux/actions/category";

interface DatesProps {
  date: string;
  changeActiveDate: (date: string) => void;
}

const _Dates: React.FC<DatesProps> = ({
  date: activeDate,
  changeActiveDate,
}) => {
  const disabledDays = ["Sab", "Min"];
  const dates = [];

  for (let i = 0; i < 14; i++) {
    const today = new Date();
    today.setDate(today.getDate() + i);

    dates.push(today);
  }

  return (
    <DatesContainer>
      {dates.map((_date, i) => {
        const [day, date] = formatTime(_date.toString(), {}).split(",");

        return (
          <CircularDate
            key={i}
            onClick={() => changeActiveDate(_date.toString())}
            isActive={isSameDay(_date, new Date(activeDate))}
            disabled={disabledDays.includes(day)}
          >
            <span>{day}</span>
            <br />
            <span>{date}</span>
          </CircularDate>
        );
      })}
    </DatesContainer>
  );
};

const mapStateToProps = (state: any) => ({
  date: state.CategoryReducer.date,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeActiveDate: (date: string) => dispatch(changeDate(date)),
});

export const Dates = connect(mapStateToProps, mapDispatchToProps)(_Dates);
