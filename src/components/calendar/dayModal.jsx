import Styles from './calendar.module.css';



export default function dayBrakdown({dayta, onClose})
{
    return (
        <>
        <div className={Styles.container}>
         <button onClick={onClose}>X</button>
         <h1>{dayta}</h1>
        </div>
        </>
    )

}