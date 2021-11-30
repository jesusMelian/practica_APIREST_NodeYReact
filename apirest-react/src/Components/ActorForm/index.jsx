import React from 'react'
import {useState, useEffect} from "react";

export const ActorForm = ({onAction, action, id}) => {
    console.log("ACCION: "+action+ " ID: "+id);
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
}
