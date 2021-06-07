import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useClick from '../../hooks/useClick'
import "../../styles/navsmall.css"
export default function Navsmall({link}) {
    const [show,setShow]=useState(false)
    const isclicked=useClick(".shadow","in")
    const isclicked2=useClick(".link","in")
    useEffect(()=>{
        if(isclicked){
            setShow(false)
        }
    },[isclicked])
    useEffect(()=>{
        if(isclicked2){
            setShow(false)
        }
    },[isclicked2])
    return (
        <div className="navsmall">
            <button onClick={()=>setShow(true)}>&#x2630;</button>
            <div className={show?"card active-card":"card"}>
                {link}
            </div>
            <div className={show?"shadow show":"shadow"}></div>
        </div>
    )
}
