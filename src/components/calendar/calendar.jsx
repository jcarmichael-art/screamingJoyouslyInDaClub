// shows monthly calendar 
// each day will be color-coded to give an immidiate idea to the importance of tasks for that day
// each day is a button that shows a modal breakdown of that day
// the modal breakdown is where you add tasks/updare/delete tasks

// optional features
// weekly mode (uses larger icons)

// this will be doing the C, R, U, and D in CRUD
// 
import { useState } from 'react'
import Styles from './calendar.module.css'

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


export default function Calendar()
{
    const [currentDate, setCurrentDate] = useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayIndex = new Date(year, month, 1).getDay();

    const totalDays = new Date(year, month + 1, 0).getDate();

    const lastMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

    let lastMonthDays = 0;
    let currentMonthDays = 0;


    const calendarCells = [];
    for (let i = 0; i < firstDayIndex; i++)
    {
        lastMonthDays = i + 1;
        const prevdays = new Date(year, month, 0 - i).getDate()
        calendarCells.push(<div key={`prev-${i}`} className={Styles.otherMonth}> {prevdays} </div>);
    }
    
    calendarCells.reverse();

    for (let day = 1; day <= totalDays; day++)
    {
        currentMonthDays = day;
        const isToday = new Date().toDateString() === new Date(year, month, day).toDateString();
        calendarCells.push(<div key={day} className={isToday ? `${Styles.today}` : ''}> 
        {day}
        </div>)
    }

    for (let j = currentMonthDays + lastMonthDays, count = 1; j < 42; j++, count++)
    {
        const nextDays = new Date(year, month + 1, count).getDate()
        calendarCells.push(<div key={`next-${j}`} className={Styles.otherMonth}> {nextDays} </div>);
    }


    return (
    <div className={Styles.calendar}>
      <div className={Styles.calendarHeader}>
        <button onClick={lastMonth}>&lt;</button>
        <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>

      <div className={Styles.weekdayGrid}>
        {weekdays.map(day => <div key={day} className={Styles.weekday}>{day}</div>)}
      </div>

      <div className={Styles.daysGrid}>
        {calendarCells}
      </div>
    </div>
    )
}
