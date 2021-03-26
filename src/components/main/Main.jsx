import React from 'react'
import Category from './Category'
import Data from './Data'
import Metrica from './Metrica'
import Navbar from './Navbar'

function Main() {

    let datos = [
        {
            color : 'primary',
            title : 'Products in Data Base',
            value : 135,
            icon : 'fa-clipboard-list'
        },
        {
            color : 'success',
            title : 'Amount in products',
            value : 546456,
            icon : 'fa-dollar-sign'
        },
        {
            color : 'warning',
            title : "Users quantity",
            value : 38,
            icon : 'fa-user-check'
        }
    ]
    return (
        <div id="content">

        <Navbar/>

        <div className="container-fluid">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <div className="row">
                {
                    datos.map((dato,i)=>
                    <Metrica
                        key = {dato.title + i}
                        color = {dato.color}
                        title = {dato.title}
                        value = {dato.value}
                        icon = {dato.icon}
                    />
                    )
                }
           
            </div>

            <div className="row">
    
              <Data/>
              <Category/>

            </div>
        </div>
    </div>
    )
}

export default Main
