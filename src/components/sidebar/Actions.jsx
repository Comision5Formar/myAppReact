import React from 'react'
import Action from './Action'

let datos = [
    {
        icon: "fa-folder",
        item: 'Pages'
    },
    {
        icon: "fa-chart-area",
        item: 'Charts'
    },
    {
        icon: "fa-table",
        item: 'Tables'
    },
    {
        icon: "fa-folder",
        item: 'Archivos'
    }
]

function Actions() {
    return (
        <>
            <div className="sidebar-heading">Actions</div>
            {
                datos.map((dato,i) =>
                    <Action
                        key= {dato.item + i}
                        item={dato.item}
                        icon={dato.icon}
                    />
                )
            }
        </>
    )
}

export default Actions
