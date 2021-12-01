import React from 'react'
import {useState} from "react";

export const ActorForm = ({ action, id, actors, onEdit, onInsert}) => {
      //FILTRAR POR ID
    const filtrarId = (id) => {
        const result = actors.filter(actors => actors.actor_id === id);
        console.log('Result:', result);
        return result[0];
    }
    console.log("Actor0 :", filtrarId(id));
    const actor = filtrarId(id);
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();

    //ENVIO DEL FORMULARIO
    const handleSubmit = (e) => {
        const myActor = {
            actor_id: id,
            first_name,
            last_name
        };
        console.log('handleSubmit myActor',myActor);
        e.preventDefault();
        if(action ===1){
            onEdit(myActor)
        }else{
            onInsert(myActor)
        }
        
    }
    if(action === 0){
        return (
            <>
            <h1 className="text-center">Crear actor</h1>
                <form className="form-padding border border-dark" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="first_name">Nombre</label>
                        <input type="text" className="form-control" id="first_name" onChange={(e) => setFirstName(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label for="last_name">Apellidos</label>
                        <input type="text" className="form-control" id="last_name" onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">ENVIAR</button>
                </form>
            </>
        )
    } else if(action === 1){
        
        console.log('LLego');
        //setActor(actor);
        console.log("new actor: ",actor);
        console.log("ACCION: "+action+ " ID: "+id);
        //Cuando le doy al botón editar, ya habré editado un cliente, asi que volveré a 
        //cambiar la accion a 0 para que me salga el formulario de crear
        
        
        return (
            <>
            <h1 className="text-center">Editar actor</h1>
                <form className="form-padding border border-dark" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="first_name">Nombre</label>
                        <input type="text" className="form-control" id="first_name" value={actor.first_name} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="last_name">Apellidos</label>
                        <input type="text" className="form-control" id="last_name" value={actor.last_name} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary" >EDITAR</button>
                </form>
            </>
        )

        
    }
    
}
