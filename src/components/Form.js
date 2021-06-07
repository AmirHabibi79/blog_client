import React from 'react'
import "../styles/form.css"
export default function Form({onsubmit,children,submittext}) {
    return (
        <>
        <form className="form-group" onSubmit={onsubmit}>
            {children}
            <button className="btn btn-green" type="submit">{submittext}</button>
        </form>
        
        </>
    )
}
