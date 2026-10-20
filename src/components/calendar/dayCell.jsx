import { useState } from 'react';
import styles from './calendar.module.css';
import Modal from './dayModal.jsx'

function makeString(year, month, day)
{
    const stringYear = year.toString();
    const stringMonth = month.toString();
    const stringDay = day.toString();


    return `${stringYear}-${stringMonth.padStart(2, '0')}-${stringDay.padStart(2, '0')}`
}

function filterToday(date, tasks)
{

    const taskPerDay = tasks.filter((task) =>
    {
        if (task.data_json.date === date)
        {
            return task;
        }
    })
    return taskPerDay;
}



export default function DayCell({setReload, tasks, year, month, day, isToday})
{
    const [close, setClose] = useState(false)

    const date = makeString(year, month, day)
    const todayTasks = filterToday(date, tasks)

    return (
        <>
        <div className={isToday ? `${styles.today}` : ''}> 
        <button onClick={() => setClose(!close)}>{day}</button>
        {close && (<Modal setReload={setReload} todayTasks={todayTasks} date={date} onClose={() => setClose(!close)}/>)}        

        </div>
        </>
    )
}