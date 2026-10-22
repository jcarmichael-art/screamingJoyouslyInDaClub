//changes display to whatever the nav buttons have been set to 
//navButtons needs to be imported in here and passed a function to alter state inside this to change display

//alternate display components will be imported and activated in here based on what happens inside navButtons

import { useState, useEffect } from 'react';


import NavButtons from '../navButton/navButton';
import Calendar from '../calendar/calendar';
import getData from '../helpers/getData';
import Chat2 from '../chat/chat2';

import Styles from './heroPane.module.css';

export default function HeroPane()
{
    const [reload, setReload] = useState(false)
    const [chats, setChats] = useState([])
    const [tasks, setTasks] = useState([])
    const [error, setError] = useState('')
    const [save, setSave] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [hero, setHero] = useState('')

    useEffect(() =>
    {
        async function load() 
        {
            setSave('loading:')
            try
            {
                const { chats: loadedChats, tasks: loadedTasks } = await getData();

                
                setChats(loadedChats);
                setTasks(loadedTasks);
                setLoaded(true)
                setSave('Loading: Success')
                if (!hero)
                {
                    setHero('calendar')
                }

            } catch (err)
            {
                setSave('Loading: Failed')
                setLoaded(false)
                console.error(err);
                setError("Couldn't load your tasks.")
            }
        }
        load();
    }, [reload])



    return (
        <>
        <div className={Styles.container}>

        <div className={Styles.NavButtons}>
        <NavButtons onAction={setHero} loaded={loaded} error={error} save={save}/>
        </div>

        <div className={Styles.HeroPane}>
        {hero === 'chat' ? <Chat2 chats={chats} tasks={tasks} setReload={setReload} /> : <div></div>}
        {hero === 'calendar' ? <Calendar tasks={tasks} setReload={setReload}/> : <div></div>}
        </div>
        <div>
        {save && <p>{save}</p>}
        </div>

        </div>

        </>
    )

}

