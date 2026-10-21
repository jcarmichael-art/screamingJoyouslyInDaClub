import { useState } from 'react';
import Styles from './calendar.module.css';
import sendPost from '../helpers/sendPost';
import sendDelete from '../helpers/sendDelete';



export default function Modal({setReload, todayTasks, date, onClose})
{
    const [error, setError] = useState('');
    const [save, setSave] = useState('');

    const [select, setSelect] = useState(1)
    const [text, setText] = useState('')

    const [tasks, setTask] = useState()


    const handleChange = (event) =>
    {
        setText(event.target.value)
    }


    return (
        <>
        <div className={Styles.container}>
        <button onClick={onClose}>X</button>            
        <div>

         <h1>{date}</h1>
        </div>
        <div>

        <input type='text' value={text} onChange={handleChange} placeholder='Enter Task' />

         <select onChange={(event) => setSelect(event.target.value)}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
         </select>

        </div>

        <div>
            {todayTasks.map((task) =>
            {
                return (
                    <>
                    <a> <button onClick={() => setTask(task)}> {task.data_json.content} </button> </a>
                    <p>Level: {task.data_json.level}</p>
                    </>
                )
            })}
        </div>

        <button disabled={text ? false : true} onClick={() => sendPost(setReload, setSave, setError, {'team': 2, 'body': {'type': 'task', 'level': select, 'points': 0, 'date': date, 'content': text}})}>Save Task</button>  
  
         {save && <p>{save}</p>}
         {error && <p>{error}</p>}
        </div>
        </>
    )

}