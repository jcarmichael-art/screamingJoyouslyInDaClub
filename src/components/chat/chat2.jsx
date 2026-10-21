import { useState } from "react"

import sendUpdate from '../helpers/sendUpdate'

import styles from './chat.module.css'

import getRandomChat from "../helpers/getRandomChat"

//I was setting up the updater to the chat choice and date
// optionSelect will be what calls the sendUpdate
// still need to make something that selects a random chat out of the array


export default function Chat2({chats}) {
    console.log(chats)
    const [option, setOption] = useState()
    const [currentDate, setCurrentDate] = useState(new Date());

    const [error, setError] = useState('');
    const [save, setSave] = useState('');

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();

    const [random, setRandom] = useState(() => getRandomChat(chats))


    function makeString(year, month, day)
    {
        const stringYear = year.toString();
        const stringMonth = month.toString();
        const stringDay = day.toString();


        return `${stringYear}-${stringMonth.padStart(2, '0')}-${stringDay.padStart(2, '0')}`
    }

    let stringDate = makeString(year, month + 1, day)

    function optionSelect(index, chats)
    {
        chats.data_json.choice = index;
        chats.data_json.date = stringDate;
        sendUpdate()
    }





    for (let i = 0; i < chats.length; i++)
    {
        if (chats[i].data_json.date)
        {
            return (
                <>
                <div className={styles.chat2}>

                <h1 className={styles.chat2__date}>test if a date exists</h1>

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

