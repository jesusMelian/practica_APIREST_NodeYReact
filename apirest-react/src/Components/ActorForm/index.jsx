import React from 'react'
import {useState, useEffect} from "react";
import bd from '../../services/services'

export const ActorForm = ({onAction, action, id, actor}) => {
    
    console.log("ACCION: "+action+ " ID: "+id);
    if(action == 0){
        return (
            <>
            <h1 className="text-center">Crear actor</h1>
                <form className="form-padding border border-dark ">
                    <div className="form-group">
                        <label for="first_name">Nombre</label>
                        <input type="text" className="form-control" id="first_name" />
                    </div>
                    <div className="form-group">
                        <label for="last_name">Apellidos</label>
                        <input type="text" className="form-control" id="last_name" />
                    </div>
                    <button type="submit" className="btn btn-primary">ENVIAR</button>
                </form>
            </>
        )
    } else if(action == 1){
        //Cuando le doy al botón editar, ya habré editado un cliente, asi que volveré a 
        //cambiar la accion a 0 para que me salga el formulario de crear
        console.log(actor[0]);
            
                
        return (
            <>
            <h1 className="text-center">Editar actor</h1>
                <form className="form-padding border border-dark ">
                    <div className="form-group">
                        <label for="first_name">Nombre</label>
                        <input type="text" className="form-control" id="first_name"value={actor[0].first_name} />
                    </div>
                    <div className="form-group">
                        <label for="last_name">Apellidos</label>
                        <input type="text" className="form-control" id="last_name" value={actor[0].last_name} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={() => edit(id)}>EDITAR</button>
                </form>
            </>
        )

        const edit = (id) => {
            onAction(0);
        }
    }
    
}
