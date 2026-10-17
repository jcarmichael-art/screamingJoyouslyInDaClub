//changes display to whatever the nav buttons have been set to 
//navButtons needs to be imported in here and passed a function to alter state inside this to change display

//alternate display components will be imported and activated in here based on what happens inside navButtons

import { useState } from 'react';
import Styles from 'heroPane.module.css';

export default function HeroPane()
{
    const [hero, sethero] = useState('calendar')

    


}

