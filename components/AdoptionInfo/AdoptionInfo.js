import React from 'react';

function AdoptionInfo(){
    return(
    <>
    <section>
        <h1 className="title">♥ FORMULARIO DE ADOPCIÓN ♥</h1>
        <p id="description">Muchas gracias por tu interés en adoptar un animalito!</p>
    </section>

    <form>
        <div>
            <p> ¿Alguna vez adoptaste un animalito de un refugio o de la calle?</p>
            <label for="yes"> 
                Si
                <input type="radio" name="didYouAdopt" value="yes" required/> 
            </label>

            <label for="no"> 
                No
            <input type="radio" name="didYouAdopt" value="no" required/>
            </label>
        </div>

        <div>
            <p> ¿Tenés mascotas actualmente?</p>
            <label for="dog"> 
                Perro
                <input type="radio" name="hasPets" value="dog" required/> 
            </label>

            <label for="cat"> 
                Gato
            <input type="radio" name="hasPets" value="cat" required/>
            </label>

            <label for="no"> 
                No tengo
            <input type="radio" name="hasPet" value="no" required/>
            </label>
        </div>

        <div>
            <p>¿Cuántas horas pasaría la mascota sola en el hogar?</p>
            <label for="1hs"> 
                Menos de 1hs
            <input type="radio" name="hoursAlone" value="1hs" required/>
            </label>

            <label for="1to3hs"> 
                Entre 1 y 3hs
            <input type="radio" name="hoursAlone" value="1to3hs" required/>
            </label>

            <label for="4to6hs"> 
                Entre 4 y 6hs
            <input type="radio" name="hoursAlone" value="4to6hs" required/>
            </label>

            <label for="8to10"> 
                8 to 10hs
                <input type="radio" name="hoursAlone" value="8to10hs" required/>
            </label>
        </div>

        <div>
            <p>¿Dónde queda la mascota cuando sales de casa? </p>
            <label for="inside">  
                Adentro de la casa
                <input type="checkbox" name="insideOutside" value="inside" required/>
            </label>

            <label for="outside"> 
                Afuera de la casa 
                <input type="checkbox" name="insideOutside" value="outside" required/>
            </label>
        </div>

        <div>
            <label for="age"> 
                <p>¿Edad de preferencia?</p> 
            </label>
            <select for="age" name="age">
                <option value=""></option>
                <option value="baby">Cachorro</option>
                <option value="young">Jóven</option>
                <option value="adult">Adulto</option>
                <option value="senior">Grande</option>
                <option value="none">No tengo preferencia</option>
            </select>
        </div>

        
        <div>
            <label for="size"> 
                <p>¿Tamaño de preferencia?</p>
            </label>
            <select for="size" name="size">
                <option value=""></option>
                <option value="small">Pequeño</option>
                <option value="medium">Mediano</option>
                <option value="big">Grande</option>
                <option value="none">No tengo preferencia</option>
            </select>
        </div>

        <div>
            <label for="sex"> 
                <p>¿Buscas hembra o macho?</p> 
            </label>
            <select for="sex" name="sex">
                <option value=""></option>
                <option value="female">Hembra</option>
                <option value="male">Macho</option>
                <option value="none">No tengo preferencia</option>
            </select>
        </div>

        <div>
            <p> ¿Hay niñes en el hogar? </p>
            <label for="si"> 
                Si
                <input type="radio" name="kids" value="yes" required/> 
            </label>

            <label for="no"> 
                No
            <input type="radio" name="kids" value="no" required/>
            </label>
        </div>

        <div>
            <p> ¿El hogar cuenta con alguno de los siguientes? </p>
            
            <label for="balcony">
                Balcón
                <input type="checkbox" name="exterior" value="balcony" required/>
            </label>

            <label for="patio">
                Patio
                <input type="checkbox" name="exterior" value="patio" required/>
            </label>

            <label for="protection">
                Tengo red en todo el hogar
                <input type="checkbox" name="exterior" value="protection" required/>
            </label>
        </div>


        <div>
            <label for="owner">
                <p>¿Quién será la persona a cargo de la mascota?</p>
            </label>
            <select for="owner" name="owner">
                <option value=""></option>
                <option value="me">Yo</option>
                <option value="familyMember">Alguien de la familia</option>
                <option value="other">Otro</option>
            </select>
        </div>

        <div>
            <label for="aboutYou"> 
                <p>Contanos por que te gustaría tener una mascota :)</p> 
            </label>
            <textarea for="aboutYou" rows="10" cols="50" />
        </div>

        <button type="submit" name="submit" className="submit"> Enviar </button>

    </form>

    </>
    )
}

export default AdoptionInfo;