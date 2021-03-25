import React from 'react'
import Category from './Category'
import Data from './Data'
import Metrica1 from './Metrica1'
import Metrica2 from './Metrica2'
import Metrica3 from './Metrica3'
import Navbar from './Navbar'

function Main() {
    return (
        <div id="content">

        <Navbar/>

        <div className="container-fluid">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <div className="row">
                <Metrica1/>
                <Metrica2/>
                <Metrica3/>
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
