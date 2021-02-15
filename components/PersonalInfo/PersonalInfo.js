import React from 'react';

function PersonalInfo(){
    return(
    <>
    <section>
        <h1 id="title">♥ FORMULARIO DE ADOPTANTE ♥</h1>
        <p id="description">Contanos un poco sobre vos :)</p>
    </section>

    <form>
        <div>
            <label for="firstName"><p>Nombre</p></label>
            <input type="text" name="firstName" className="firstName" required/>
        </div>

        <div>
            <label for="lastName"><p>Apellido</p></label>
            <input type="text" name="lastName" className="lastName" required/>
        </div>

        <div>
            <label for="birthday"><p>Fecha de Nacimiento</p></label>
            <input type="date" name="birthday" className="birthday" required/>
        </div>
        
        <div>
            <label for="address"><p>Dirección</p></label>
            <input type="text" name="address" className="address" required/> 
        </div>
        
        <div>
            <label for="phoneNumber"><p>Teléfono</p></label>
            <input type="tel" name="phoneNumber" className="phoneNumber" required/>
        </div>
        
        <div>
            <label for="email"><p>Email</p></label>
            <input type="email" name="email" className="email" required/>
        </div>

        <div>
            <button type="submit" name="submit" className="submit"> Siguiente </button>
        </div>

    </form>
    </>
    )
}

export default PersonalInfo;