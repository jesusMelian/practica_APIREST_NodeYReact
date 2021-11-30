import React from 'react'
const bootstrap = require('bootstrap')

//Por defecto el array de actores esta vacio
export const ActorList = ({actors = []}) => {
    
    return (
        <div className="table-wrapper">
            <div className="table_scroll">
                <table className="table-content">
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th colpan="2">Acciones</th>
                    </tr>
                    {
                        actors.map((actor) => {
                            return(
                                
                                    <tr>
                                        <td key={actor.actor_id}>{actor.actor_id}</td>
                                        <td>{actor.first_name}</td>
                                        <td>{actor.last_name}</td>
                                        <td><button id={actor.actor_id} >EDITAR</button></td>
                                        <td><button id={actor.actor_id} >ELIMINAR</button></td>
                                    </tr>
                                
                                );
                        })
                    }
                </table>
            </div>
        </div>
    )
}
