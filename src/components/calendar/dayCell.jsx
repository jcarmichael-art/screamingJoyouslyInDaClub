import { useState } from 'react';
import styles from './calendar.module.css';
import Modal from './dayModal.jsx'

function makeString(year, month, day)
{
    const stringYear = year.toString()
    const stringMonth = month.toString()
    const stringDay = day.toString()

    return`${stringYear}-${stringMonth.padStart(2, '0')}-${stringDay.padStart(2, '0')}`
}



export default function DayCell({year, month, day, isToday})
{
    const [close, setClose] = useState(false)

    const date = makeString(year, month, day)

    return (
        <>
        <div className={isToday ? `${styles.today}` : ''}> 
        <button onClick={() => setClose(!close)}>{day}</button>
        {close && (<Modal date={date} data={day} onClose={() => setClose(!close)}/>)}        
        </div>    
        </>
    )
}