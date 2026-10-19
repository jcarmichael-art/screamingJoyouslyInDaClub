import { useState } from 'react';
import Styles from './calendar.module.css';
import sendRequest from '../helpers/sendRequest';



export default function dayBrakdown({date, data, onClose})
{
    const [error, setError] = useState('');
    const [save, setSave] = useState('');

    async function saveHandle()
    {
        setError('');
        setSave('');
        const apiObj = {'team': 2, 'body': {'type': 'task', 'level': 1, 'points': 0, 'date': date, 'content': 'take out trash'}}
        const delObj = {'team': 2, 'id': 2}
        const upObj = {'type': 'task', 'level': 2, 'points': 0, 'date': date, 'content': 'take out trash'}
        try
        {
            await sendRequest('update', upObj, '?teamId=2&recordId=3');
            setSave('Success!')
        }
        catch (err)
        {
            console.error(err);
            setError(`Couldn't save, try again`);
        }
    }

    return (
        <>
        <div className={Styles.container}>
         <button onClick={onClose}>X</button>
         <h1>{date}</h1>
         <button onClick={saveHandle}>save</button>
         {save && <p>{save}</p>}
         {error && <p>{error}</p>}
        </div>
        </>
    )

}