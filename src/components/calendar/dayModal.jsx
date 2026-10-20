import { useState } from 'react';
import Styles from './calendar.module.css';
import sendPost from '../helpers/sendPost';



export default function Modal({date, data, onClose})
{
    const [error, setError] = useState('');
    const [save, setSave] = useState('');

    const [select, setSelect] = useState(1)
    const [text, setText] = useState('test')


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

        <button disabled={text ? false : true} onClick={() => sendPost(setSave, setError, {'team': 2, 'body': {'type': 'task', 'level': select, 'points': 0, 'date': date, 'content': text}})}>save</button>  
  
         {save && <p>{save}</p>}
         {error && <p>{error}</p>}
        </div>
        </>
    )

}