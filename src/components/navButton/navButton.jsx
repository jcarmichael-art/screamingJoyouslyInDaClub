//gets passed a function to change state in the heroPane component 

import styles from './navButtons.module.css'




export default function NavButtons({onAction, loaded, error, save})
{

    const heroPanes = {'buttons': ['chat', 'calendar']};

    return (
        <>
        
        <div className={styles.buttons}>

        {heroPanes.buttons.map((button) => 
        {
            
            return<button key={button} disabled={loaded === true ? false : true} onClick={() => onAction(button)} > {button} </button>
        })}

        </div>

        </>
    )

}