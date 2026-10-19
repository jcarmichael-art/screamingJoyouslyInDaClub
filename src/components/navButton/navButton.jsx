//gets passed a function to change state in the heroPane component 

import styles from './navButtons.module.css'

export default function NavButtons({onAction})
{

    const heroPanes = {'buttons': ['chat', 'calendar']};

    return (
        <>
        
        <div className={styles.buttons}>

        {heroPanes.buttons.map((button) => 
        {
            return <a key={button}> <button onClick={() => onAction(button)} > {button} </button> </a>
        })}

        </div>

        </>
    )

}