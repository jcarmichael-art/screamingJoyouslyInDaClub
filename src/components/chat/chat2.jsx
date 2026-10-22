import { useState } from "react"

import sendUpdate from '../helpers/sendUpdate'

import styles from './chat.module.css'

import getRandomChat from "../helpers/getRandomChat"

import Tally from './tally';

//I was setting up the updater to the chat choice and date
// optionSelect will be what calls the sendUpdate
// still need to make something that selects a random chat out of the array


export default function Chat2({chats, todayTasks, setReload}) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();

    const [option, setOption] = useState()

    const [date, setDate] = useState(() => makeString(year, month + 1, day))

    const [error, setError] = useState('');
    const [save, setSave] = useState('');
    const [tasks, setTasks] = useState('');



    const [random, setRandom] = useState(() => getRandomChat(chats))


    function makeString(year, month, day)
    {
        const stringYear = year.toString();
        const stringMonth = month.toString();
        const stringDay = day.toString();
        return `${stringYear}-${stringMonth.padStart(2, '0')}-${stringDay.padStart(2, '0')}`
    }

    function optionSelect(index, random)
    {
        random.data_json.choice = index;
        random.data_json.date = date;
        sendUpdate(random, {'type': 'chat', 'story': random.data_json.story, 'options':random.data_json.options, 'results': random.data_json.results, 'choice': index, 'date': date}, setSave, setError, setReload, setTasks)
    }


    for (let i = 0; i < chats.length; i++)
    {
        if (chats[i].data_json.date)
        {
            return (
                <>
                <div className={styles.chat2}>
                    <p className={styles.chat2__story}>
                    {chats[i].data_json.story}
                    </p>
                </div>

                <div className={styles.userTextBox}>
                    <p className={styles.userchat}>•User: {chats[i].data_json.options[chats[i].data_json.choice]}</p>
                </div>
               
                <div>


                    <Tally chat={chats[i]} tasks={todayTasks} sendUpdate={sendUpdate} setReload={setReload} />


                {save && <p>{save}</p>}
                </div>
                </>
            )
        }
    }

    return (
        <>
        <div className={styles.chat2}>
            <p className={styles.chat2__story}>
            {random.data_json.story}
            </p>
        </div>
        <div>
            {random.data_json.options.map((option, index) =>
            {
                return (
                    <div  key={option}>
                        <button className={styles.btn} onClick={() => optionSelect(index, random)} >{option}</button>
                    </div>
                )
            })}
        </div>
        </>

    )
}

