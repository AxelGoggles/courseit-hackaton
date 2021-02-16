import React from 'react';
import styles from './AdoptionInfo.module.scss'
import { useForm } from 'react-hook-form'

const AdoptionInfo = ({ ref }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
    <section className={styles.adoptionInfo} ref={ref}>
        <h1 className="title" className={styles.title}>♥ FORMULARIO DE ADOPCIÓN ♥</h1>
        <p id="description" className={styles.subtitle}>Muchas gracias por tu interés en adoptar un animalito!</p>
    
        <form className={styles.adoptionInfoForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.divContainer}>
                <div className={styles.question}>
                    <p> ¿Alguna vez adoptaste un animalito de un refugio o de la calle?</p>
                    <label htmlFor="yes"> 
                        <input ref={register({ required: true})} type="radio" name="didYouAdopt" value="yes"/> 
                    Si
                    </label>

                    <label htmlFor="no"> 
                    <input ref={register({ required: true})} type="radio" name="didYouAdopt" value="no"/>
                    No
                    </label>
                </div>

                <div className={styles.question}>
                    <p> ¿Tenés mascotas actualmente?</p>
                    <label htmlFor="dog"> 
                        <input ref={register({ required: true})} type="radio" name="hasPets" value="dog"/> 
                        Perro
                    </label>

                    <label htmlFor="cat"> 
                    <input ref={register({ required: true})} type="radio" name="hasPets" value="cat" />
                        Gato
                    </label>

                    <label htmlFor="no"> 
                    <input ref={register({ required: true})} type="radio" name="hasPet" value="no" />
                        No tengo
                    </label>
                </div>

                <div className={styles.question}>
                    <p>¿Cuántas horas pasaría la mascota sola en el hogar?</p>
                    <label htmlFor="1hs"> 
                    <input ref={register({ required: true})} type="radio" name="hoursAlone" value="1hs" />
                        Menos de 1hs
                    </label>

                    <label htmlFor="1to3hs"> 
                    <input ref={register({ required: true})} type="radio" name="hoursAlone" value="1to3hs" />
                        Entre 1 y 3hs
                    </label>

                    <label htmlFor="4to6hs"> 
                    <input ref={register({ required: true})} type="radio" name="hoursAlone" value="4to6hs" />
                        Entre 4 y 6hs
                    </label>

                    <label htmlFor="8to10"> 
                        <input ref={register({ required: true})} type="radio" name="hoursAlone" value="8to10hs" />
                        8 to 10hs
                    </label>
                </div>

                <div className={styles.question}>
                    <p>¿Dónde queda la mascota cuando sales de casa? </p>
                    <label htmlFor="inside">  
                        <input ref={register({ required: true})} type="checkbox" name="insideOutside" value="inside" />
                        Adentro de la casa
                    </label>

                    <label htmlFor="outside"> 
                        <input ref={register({ required: true})} type="checkbox" name="insideOutside" value="outside" />
                        Afuera de la casa 
                    </label>
                </div>

                <div className={styles.question}>
                <p>¿Edad de preferencia?</p> 
                        <select ref={register({ required: true})} htmlFor="age" name="age">
                            <option value=""></option>
                            <option value="baby">Cachorro</option>
                            <option value="young">Jóven</option>
                            <option value="adult">Adulto</option>
                            <option value="senior">Grande</option>
                            <option value="none">No tengo preferencia</option>
                        </select>
                </div>

                <div className={styles.question}>
                    <p>¿Tamaño de preferencia?</p>
                    <select ref={register({ required: true})} htmlFor="size" name="size">
                        <option value=""></option>
                        <option value="small">Pequeño</option>
                        <option value="medium">Mediano</option>
                        <option value="big">Grande</option>
                        <option value="none">No tengo preferencia</option>
                    </select>
                </div>

                
            </div>

            <div className={styles.divContainer}>
                <div className={styles.question}>
                        <p>¿Buscas hembra o macho?</p> 
                        <select ref={register({ required: true})} htmlFor="sex" name="sex">
                            <option value=""></option>
                            <option value="female">Hembra</option>
                            <option value="male">Macho</option>
                            <option value="none">No tengo preferencia</option>
                        </select>
                    </div>

                <div className={styles.question}>
                    <p> ¿Hay niñes en el hogar? </p>
                    <label htmlFor="si"> 
                        <input ref={register({ required: true})} type="radio" name="kids" value="yes" /> 
                        Si
                    </label>

                    <label htmlFor="no"> 
                    <input ref={register({ required: true})} type="radio" name="kids" value="no" />
                        No
                    </label>
                </div>

                <div className={styles.question}>
                    <p> ¿El hogar cuenta con alguno de los siguientes? </p>
                    
                    <label htmlFor="balcony">
                        <input ref={register({ required: true})} type="checkbox" name="exterior" value="balcony" />
                        Balcón sin red
                    </label>

                    <label htmlFor="patio">
                        <input ref={register({ required: true})} type="checkbox" name="exterior" value="patio" />
                        Patio sin red
                    </label>

                    <label htmlFor="protection">
                        <input ref={register({ required: true})} type="checkbox" name="exterior" value="protection" />
                        Tengo red en todo el hogar
                    </label>
                </div>


                <div className={styles.question}>
                    <p>¿Quién será la persona a cargo de la mascota?</p>
                    <select ref={register({ required: true})} htmlFor="owner" name="owner">
                        <option value=""></option>
                        <option value="me">Yo</option>
                        <option value="familyMember">Alguien de la familia</option>
                        <option value="other">Otro</option>
                    </select>
                </div>

                <div className={styles.question}>
                        <p>Contanos por que te gustaría tener una mascota :)</p> 
                    <textarea ref={register({ required: true})} htmlFor="aboutYou" rows="8" cols="50" name="textarea" className={styles.textarea}/>
                </div>
            </div>

        </form>

        <div className={styles.buttonContainer}>
                <input type="submit" value="enviar" 
                className={styles.button} />
            </div>
    </section>
    )
}

export default AdoptionInfo;