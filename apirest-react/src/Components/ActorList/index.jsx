import React from 'react'
const bootstrap = require('bootstrap')

//Por defecto el array de actores esta vacio
export const ActorList = ({actors = []}) => {
    
    return (
        <>
        <h1 className="text-center">Listado de Actores</h1>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                        {
                            actors.map((actor) => {
                                return(
                                    <tr>
                                        <td scope="row" key={actor.actor_id}>{actor.actor_id}</td>
                                        <td>{actor.first_name}</td>
                                        <td>{actor.last_name}</td>
                                        <td>
                                            <button type="button" className="btn btn-warning m-2" id={actor.actor_id}>EDITAR</button>
                                            <button type="button" className="btn btn-danger" id={actor.actor_id} >BORRAR</button>
                                        </td>
                                    </tr>                    
                                );
                            })
                        }

            </table>
        </>
    )
}

