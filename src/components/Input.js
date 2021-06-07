import React, { useEffect } from 'react'
import "../styles/input.css"
export default function Input({name,type,placeholder,refc,error}) {
    
   useEffect(()=>{
    refc.current.addEventListener("focus",(e)=>{
        if(e.target.previousElementSibling){
            e.target.previousElementSibling.classList.add("active")
        }
    })
    refc.current.addEventListener("blur",(e)=>{
        if(e.target.value.length===0){
            if(e.target.previousElementSibling)
            e.target.previousElementSibling.classList.remove("active")
        }
    })
   },[])
    return (
        <div className="input-group">
            
            {
                type==="textarea"? <textarea ref={refc} name={name} placeholder={placeholder} />:
                <>
                <label htmlFor={name}>{placeholder}</label>
                <input ref={refc} type={type} name={name} />
                </>
            }
            {
                error && <div className="error">{error}</div>
            }
        </div>
    )
}
