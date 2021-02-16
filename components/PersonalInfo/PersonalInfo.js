import React from 'react';
import styles from './PersonalInfo.module.scss'
import { useForm } from 'react-hook-form'

const PersonalInfo = ({ref}) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    return(
    <section className={styles.personalInfo}>
        <h1 id="title" className={styles.title}>♥ FORMULARIO DE ADOPTANTE ♥</h1>
        <p id="description" className={styles.subtitle}>Contanos un poco sobre vos :)</p>
    

        <form className={styles.personalInfoForm} onSubmit={handleSubmit(onSubmit)} >
            <div>
                <div>
                    <label htmlFor="firstName"><p>Nombre</p></label>
                    <input ref={register({ required: true})} type="text" name="firstName" className="firstName" required/>
                </div>

                <div>
                    <label htmlFor="lastName"><p>Apellido</p></label>
                    <input ref={register({ required: true})} type="text" name="lastName" className="lastName" required/>
                </div>

                <div>
                    <label htmlFor="birthday"><p>Fecha de Nacimiento</p></label>
                    <input ref={register({ required: true})} type="date" name="birthday" className="birthday" required/>
                </div>
            </div>
            
            <div>
                <div>
                    <label htmlFor="address"><p>Dirección</p></label>
                    <input ref={register({ required: true})} type="text" name="address" className="address" required/> 
                </div>
                
                <div>
                    <label htmlFor="phoneNumber"><p>Teléfono</p></label>
                    <input ref={register({ required: true})} type="tel" name="phoneNumber" className="phoneNumber" required/>
                </div>
                
                <div>
                    <label htmlFor="email"><p>Email</p></label>
                    <input ref={register({ required: true})} type="email" name="email" className="email" required/>
                </div>
            </div>

        </form>
    </section>
    );
}

export default PersonalInfo;