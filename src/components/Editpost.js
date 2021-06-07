import React,{ useRef, useState} from 'react'
import MakeForm from './MakeForm'
import {URI} from "../defiens"
import "../styles/register.css"
import useFetch from '../hooks/useFetch'
import {useHistory} from "react-router-dom"
export default function Register({match}) {
    const uri=URI+"post/"+match.params.id
    const history=useHistory()
    const [url,setUrl]=useState()
    const [body,setBody]=useState()
    const {data,error}=useFetch(url,{},"put",body)
    const username=useRef()
    const pass=useRef()
    const submit=()=>{
        console.log()
        const bb={title:username.current.value,body:pass.current.value}
        setBody(bb)
        setUrl(uri)
    }
    let inputs=[
        {
            name:"title",
            type:"text",
            placeholder:"عنوان",
            ref:username,
            error:null
        },
        {
            name:"body",
            type:"textarea",
            placeholder:"متن",
            ref:pass,
            error:null
        }
    ]
    if(error.data){
        if(error.data.path==="title")
        {
            inputs[0].error=error.data.kind
        }
        else{
            inputs[1].error=error.data.kind
        }
    }
    if(Object.keys(data).includes("message")){
        history.push("/profile")
    }
    return (
        <div className="register">
            <div className="inside">
            <MakeForm inputs={inputs} submittext={"تغییر دادن"} onsubmit={(e)=>{submit();e.preventDefault()}}/>
            </div>
        </div>
    )
}
