import React,{  useRef, useState} from 'react'
import MakeForm from './MakeForm'
import {URI} from "../defiens"
import "../styles/register.css"
import useFetch from '../hooks/useFetch'
import {Redirect} from "react-router-dom"
export default function Register() {
    const uri=URI+"post/create"
    const [url,setUrl]=useState()
    const [body,setBody]=useState()
    const {data,error}=useFetch(url,{},"post",body)
    const title=useRef()
    const bodyy=useRef()
    const submit=()=>{
        console.log()
        const bb={title:title.current.value,body:bodyy.current.value}
        setBody(bb)
        setUrl(uri)
    }
    let inputs=[
        {
            name:"title",
            type:"text",
            placeholder:"عنوان",
            ref:title,
            error:null
        },
        {
            name:"body",
            type:"textarea",
            placeholder:"متن",
            ref:bodyy,
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
        return(
            <Redirect to="/profile"/>
        )
    }
    return (
        <div className="register">
            <div className="inside">
            <MakeForm inputs={inputs} submittext={"ساخت پست"} onsubmit={(e)=>{submit();e.preventDefault()}}/>
            </div>
        </div>
    )
}
