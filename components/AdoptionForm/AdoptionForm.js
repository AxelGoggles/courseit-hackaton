import React, { useState } from 'react';
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import AdoptionInfo from '../AdoptionInfo/AdoptionInfo'
import styles from './AdoptionForm.module.scss'

function AdoptionForm(){
    const [formInfo, setFormInfo] = useState({});
    const [formState, setFormState] = useState('personal')

    function handleClick(){
        setFormState('adoption')
    }

    return(
        <>
        {formState === "personal" && <PersonalInfo />}
        {formState === "adoption" && <AdoptionInfo />}
        {formState !== "adoption" && 
        <div className={styles.container}>
            <button type="submit" name="submit" className={styles.button} onClick={handleClick}> Siguiente </button>
        </div>}

        </>
    )
}


export default AdoptionForm;