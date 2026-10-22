import { useState } from "react";

export default function Tally({chat, tasks, sendUpdate, setReload})
{
    const [error, setError] = useState('');
    const [save, setSave] = useState('');
    
    const [flag, setFlag] = useState(null);
    function checkWin()
    {
        let count = 0
        for (let i = 0; i < tasks.length; i++)
        {
            if (tasks[i].data_json.date === chat.data_json.date)
            {
                count += Number(tasks[i].data_json.points);
            }
        }

        if (count >= 5)
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
            <p>Result: Success</p>
            <p>{chat.data_json.results[chat.data_json.choice][1]}</p>
            <button onClick={() => sendUpdate(chat, {'type': 'chat', 'story': chat.data_json.story, 'options': chat.data_json.options, 'results': chat.data_json.results, 'choice': '', 'date': ''}, setSave, setError, setReload)}>
            done
            </button>
            </>
        )
    }
    else if (flag === false)
    {
        return (
            <>
            <p>Result: Fail</p>
            <p>{chat.data_json.results[chat.data_json.choice][0]}</p>
            <button onClick={() => sendUpdate(chat, {'type': 'chat', 'story': chat.data_json.story, 'options': chat.data_json.options, 'results': chat.data_json.results, 'choice': '', 'date': ''}, setSave, setError, setReload)}>
           done
            </button>
            </>
        )
    }

    return (
        <>
        <button onClick={() => checkWin()} >Start Tally</button>
        </>
    )

}