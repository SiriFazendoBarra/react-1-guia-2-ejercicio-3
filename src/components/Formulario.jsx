import React from "react"



function Formulario () {
    return(
        <form>
            <div className="form-group">
                <label htmlFor="">Nombre</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">Apellido</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">Edad</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="text" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    )
}

export default Formulario