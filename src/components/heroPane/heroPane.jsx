//changes display to whatever the nav buttons have been set to 
//navButtons needs to be imported in here and passed a function to alter state inside this to change display

//alternate display components will be imported and activated in here based on what happens inside navButtons

import { useState } from 'react';
import NavButtons from '../navButton/navButton';
import Chat from '../chat/chat';
import Calendar from '../calendar/calendar';

import Styles from './heroPane.module.css';

export default function HeroPane()
{
    const [hero, setHero] = useState('calendar')

    return (
        <>
        <div className={Styles.container}>

        <div className={Styles.NavButtons}>
        <NavButtons onAction={setHero}/>
        </div>

        <div className={Styles.HeroPane}>
        {hero === 'chat' ? <Chat /> : <div></div>}
        {hero === 'calendar' ? <Calendar /> : <div></div>}
        </div>

        </div>

        </>
    )

}

