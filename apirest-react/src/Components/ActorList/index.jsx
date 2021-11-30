import React from 'react'
const bootstrap = require('bootstrap')

export const ActorList = ({actors = []}) => {
    
    return (
        <div className="table-wrapper">
            <div className="table_scroll">
                <table className="table-content">
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Acciones</th>
                    </tr>
                    {
                        actors.map()
                    }
                </table>
            </div>
        </div>
    )
}
