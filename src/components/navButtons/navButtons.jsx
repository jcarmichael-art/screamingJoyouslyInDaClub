//gets passed a function to change state in the heroPane component 
import { useState } from 'react';

export default function NavButtons(setHeroPane)
{

    const list = {'buttons': ['chat', 'calendar']};

    



    return  (
        <>
        
        <div>

        <a> {list.buttons.map((button) =>
        {
        return (
            <>
            
            <a><button >{button}</button></a>

            </>
        )

        })} </a>

        </div>

        </>
    )




}