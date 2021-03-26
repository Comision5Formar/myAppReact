import React from 'react'

function Category() {

    let categorias = ['Malbec','Cabernet','Tempranillo','Syrah','Termidor','Uvita']

    return (
        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
            </div>
            <div className="card-body">
                <div className="row">
                    {
                        categorias.map((categoria,i)=>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-info text-white shadow">
                                <div className="card-body">
                                    {categoria}
                                </div>
                            </div>
                        </div>
                        )
                    }
                   
                </div>
            </div>
        </div>
    </div>
    )
}

export default Category
