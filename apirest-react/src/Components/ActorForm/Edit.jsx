import React from 'react'
import {useState, useEffect} from "react";


const actorInitilized = {
    actor_id: null,
    first_name: '',
    last_name: ''
}
export const Edit = ({onEdit, myActor}) => {
    const [actor, setActor] = useState(actorInitilized);
    useEffect(() => {
        setActor(myActor);
        //CADA VEZ QUE YO CAMBIE MY ACTOR SE ACTUALIZA EL FORMULARIO
    }, [myActor]);

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setActor({
            ...actor,
            [event.target.name]: event.target.value
        })
        
        console.log("mi actor: ",actor);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        onEdit(actor);
        //RESETEAMOS EL VALOR DE ACTOR PARA BORRAR LOS INPUTS
        setActor({
            first_name: '',
            last_name: ''
        })

    }
        return (
            <>
            <h1 className="text-center">Editar actor</h1>
                <form className="form-padding border border-dark" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="first_name">Nombre</label>
                        <input type="text" className="form-control" id="first_name" name="first_name" onChange={handleInputChange} value={actor.first_name}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="last_name">Apellidos</label>
                        <input type="text" className="form-control" id="last_name" name="last_name" onChange={handleInputChange} value={actor.last_name}/>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">EDITAR</button>
                </form>
            </>
        )
    
    
}
