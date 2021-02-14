import React from 'react';

function PersonalInfo(){
    return(
    <>
    <section>
        <h1 id="title">♥ FORMULARIO DE ADOPTANTE ♥</h1>
        <p id="description">Contanos un poco sobre vos!</p>
    </section>

    <form>
        <div>
            <label for="firstName">Nombre</label>
            <input type="text" name="firstName" className="firstName" required/>
        </div>

        <div>
            <label for="lastName">Apellido</label>
            <input type="text" name="lastName" className="lastName" required/>
        </div>

        <div>
            <label for="birthday">Fecha de Nacimiento</label>
            <input type="date" name="birthday" className="birthday" required/>
        </div>
        
        <div>
            <label for="address">Dirección</label>
            <input type="text" name="address" className="address" required/> 
        </div>
        
        <div>
            <label for="phoneNumber">Teléfono</label>
            <input type="tel" name="phoneNumber" className="phoneNumber" required/>
        </div>
        
        <div>
            <label for="email">Email</label>
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