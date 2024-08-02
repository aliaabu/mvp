import { useState } from "react";
import "./Calendar.css";
import { Info, DateTime, Interval } from "luxon";
import classnames from "classnames";

const Calendar = ({ events }) => {
  const today = DateTime.local();
  const [activeDay, setActiveDay] = useState(null);
  const [firstDayOfActiveMonth, setFirstDayOfActiveMonth] = useState(
    today.startOf("month")
  );
  const activeDayEvents = events[activeDay?.toISODate()] ?? [];
  const weekDays = Info.weekdays("short");
  const daysOfMonth = Interval.fromDateTimes(
    firstDayOfActiveMonth.startOf("week"),
    firstDayOfActiveMonth.endOf("month").endOf("week")
  )
    .splitBy({ day: 1 })
    .map((day) => day.start);
  const goToPreviousMonth = () => {
    setFirstDayOfActiveMonth(firstDayOfActiveMonth.minus({ month: 1 }));
  };
  const goToNextMonth = () => {
    setFirstDayOfActiveMonth(firstDayOfActiveMonth.plus({ month: 1 }));
  };
  const goToToday = () => {
    setFirstDayOfActiveMonth(today.startOf("month"));
  };
  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-headline">
          <div className="calendar-headline-month">
            {firstDayOfActiveMonth.monthShort}, {firstDayOfActiveMonth.year}
          </div>
          <div className="calendar-headline-controls">
            <div
              className="calendar-headline-control"
              onClick={() => goToPreviousMonth()}
            >
              «
            </div>
            <div
              className="calendar-headline-control calendar-headline-controls-today"
              onClick={() => goToToday()}
            >
              Today
            </div>
            <div
              className="calendar-headline-control"
              onClick={() => goToNextMonth()}
            >
              »
            </div>
          </div>
        </div>
        <div className="calendar-weeks-grid">
          {weekDays.map((weekDay, weekDayIndex) => (
            <div key={weekDayIndex} className="calendar-weeks-grid-cell">
              {weekDay}
            </div>
          ))}
        </div>
        <div className="calendar-grid">
          {daysOfMonth.map((dayOfMonth, dayOfMonthIndex) => (
            <div
              key={dayOfMonthIndex}
              className={classnames({
                "calendar-grid-cell": true,
                "calendar-grid-cell-inactive":
                  dayOfMonth.month !== firstDayOfActiveMonth.month,
                "calendar-grid-cell-active":
                  activeDay?.toISODate() === dayOfMonth.toISODate(),
              })}
              onClick={() => setActiveDay(dayOfMonth)}
            >
              {dayOfMonth.day}
            </div>
          ))}
        </div>
      </div>
      <div className="schedule">
        <div className="schedule-headline">
          {activeDay === null && <div>Please select a day</div>}
          {activeDay && (
            <div>{activeDay.toLocaleString(DateTime.DATE_MED)}</div>
          )}
        </div>
        <div>
          {activeDay && activeDayEvents.length === 0 && (
            <div>No Planned Events Today</div>
          )}
          {activeDay && activeDayEvents.length > 0 && (
            <>
              {activeDayEvents.map((event, eventIndex) => (
                <div key={eventIndex}>{event}</div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;