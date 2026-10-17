//gets passed a function to change state in the heroPane component 
import { useState } from 'react';
import styles from './navButtons.module.css'

export default function NavButtons()
{

    const list = {'buttons': ['chat', 'calendar']};

    return  (
        <>
        
        <div>

        {list.buttons.map((button) => 
        {
            return <a> <button> {button} </button> </a>
        })}

        </div>

        </>
    )

}