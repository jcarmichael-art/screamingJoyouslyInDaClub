import { useState } from 'react';
import styles from './calendar.module.css';
import Modal from './dayModal.jsx'



export default function DayCell({year, month, day, isToday})
{
    const [close, setClose] = useState(false)

    
    return (
        <>
        <div className={isToday ? `${styles.today}` : ''}> 
        <button onClick={() => setClose(!close)}>{day}</button>
        {close && (<Modal dayta={day} onClose={() => setClose(!close)}/>)}        
        </div>    
        </>
    )
}