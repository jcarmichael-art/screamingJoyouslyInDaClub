//gets passed a function to change state in the heroPane component 
import { useState } from 'react';

export default function NavButtons()
{

    const list = {'buttons': ['chat', 'calendar']};

    return  (
        <>
        
        <div>

        <a> {list.buttons.map((button) =>
        {
        return (
            <>
            
            <a>{button}</a>

            </>
        )

        })} </a>

        </div>

        </>
    )




}