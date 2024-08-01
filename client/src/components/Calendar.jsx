import { DateTime } from "luxon";
import "./calendarGrid.css";

const Calendar = () => {
    //preparing state

    //2. we need to have a reference for today
    //we store the function that returns the day today in the today variable
    const today = DateTime.local();

    //3. we want to store our day in a state, so when we jump between months while browsing our calendar, today's date doesn't go anywhere
    const [firstDayOfActiveMonth, setFirstDayOfActiveMonth] = useState(today.startOf("month"));

    //1. this is a function that returns an array of weekdays in their full form, e.g. Monday, Tuesday... Sunday
    //when we add "short", it returns an array in short-form, e.g. Mon, Tue..
    const weekDays = Info.weekdays("short");

      //4. we need to prepare an array of dates from the beginning of the month to the end of the month but it must include dates of the previous and future month if the start and end of the current month is not at the beginning of the week

      const daysOfMonth = Interval.fromDateTimes(firstDayOfActiveMonth.startOf("week"), firstDayOfActiveMonth.endOf("month").endOf("week"))
      .splitBy({day: 1})
      .map((day) => day.start);
      
      //try to see the progress in the console
      //the .map should show how arrays of the dates (check minute 6 of the video)
    //   console.log(daysOfMonth);


    return (
        //rendering markup
        <div className = "calendar-container">
            <div className="calendar">
                <div className="calendar-headline">
                    <div className="calendar-headline-month">
                        {firstDayOfActiveMonth.monthShort}, {firstDayOfActiveMonth.year}
                    </div>
                    <div className="calendar-headline-controls">
                        <div className="calendar-headline-control">-</div>
                        <div className="calendar-headline-control calendar-headline-controls-today">Today</div>
                        <div className="calendar-headline-control">+</div>
                    </div>
                </div>
                <div className="calendar-weeks-grid">{weekDays.map((weekDay, weekDayIndex) => (
                    <div key={weekDayIndex} className="calendar-weeks-grid-cell">{weekDay}</div>
                ))}</div>
                {/* this part below will render the calendar in a grid format with the dates inside */}
                <div className="calendar-grid">
                    {daysOfMonth.map((dayOfMonth, dayOfMonthIndex) => (
                        <div key={dayOfMonthIndex} className="calendar-grid-cell">
                            {dayOfMonth.day}
                        </div>
                    ))}
                </div>
            </div>

{/* this part below ADDS MEETINGS TO CALENDAR */}
            <div className="schedule"></div>
        </div>
    );
}

export default Calendar;

//TO DO:
//restart at line 56
//figure out where meeting variable in video's app.jsx goes in my project... inputForm? 
//how to appropriate the meeting concept here with the data I have in my backend
//SETUP REACT ROUTER!!! URGENT