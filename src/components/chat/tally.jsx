import { useState } from "react";

import styles from './chat.module.css'

export default function Tally({chat, todayTasks, sendUpdate, setReload})
{
    const [error, setError] = useState('');
    const [save, setSave] = useState('');
    const [tasks, setTasks] = useState('');
    
    const [flag, setFlag] = useState(null);
    function checkWin()
    {
        let count = 0
        let maxCount = 0
        for (let i = 0; i < tasks.length; i++)
        {
            if (todayTasks[i].data_json.date === chat.data_json.date)
            {
                count += Number(todayTasks[i].data_json.points);
                maxCount += Number(todayTasks[i].data_json.level);
            }
        }

        if (count >= maxCount * .75)
        {
            setFlag(true)
            return
        }
        setFlag(false)
        return 
    }

    if (flag === true)
    {
        return (
            <>
            <div className={styles.chat2}>
            <p>{chat.data_json.results[chat.data_json.choice][0]}</p>
            <button onClick={() => sendUpdate(chat, {'type': 'chat', 'story': chat.data_json.story, 'options': chat.data_json.options, 'results': chat.data_json.results, 'choice': '', 'date': ''}, setSave, setError, setReload, setTasks)}>
            <span>done</span>
            </button>
            </div>
            </>
        )
    }
    else if (flag === false)
    {
        return (
            <>
            <div className={styles.chat2}>
            <p>{chat.data_json.results[chat.data_json.choice][1]}</p>
            <button onClick={() => sendUpdate(chat, {'type': 'chat', 'story': chat.data_json.story, 'options': chat.data_json.options, 'results': chat.data_json.results, 'choice': '', 'date': ''}, setSave, setError, setReload, setTasks)}>
            <span>done</span>
            </button>
            </div>
            </>
        )
    }

    return (
        <>
        <button className={styles.tallyBtn} onClick={() => checkWin()} ><span>Start Tally</span></button>
        </>
    )

}