import React from 'react'


//Por defecto el array de actores esta vacio
export const ActorList = ({actors = [], onDelete, onAction}) => {
    
    return (
        <>
        <h1 className="text-center">Listado de Actores</h1>
            <table className="table table-striped">
                <thead>
                    <tr className="bg-dark text-light">
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            actors.map((actor) => {
                                return(
                                    <tr>
                                        <td key={actor.actor_id}>{actor.actor_id}</td>
                                        <td>{actor.first_name}</td>
                                        <td>{actor.last_name}</td>
                                        <td>
                                            <button type="button" className="btn btn-warning m-2" id={actor.actor_id} onClick={() => {onAction(1,actor.actor_id)}}>EDITAR</button>
                                            <button type="button" className="btn btn-danger" id={actor.actor_id} onClick={() => onDelete(actor.actor_id)}>BORRAR</button>
                                        </td>
                                    </tr>                    
                                );
                            })
                        }
                    </tbody>
            </table>
        </>
    )
}

