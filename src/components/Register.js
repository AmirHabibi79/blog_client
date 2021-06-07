import React,{ useRef, useState} from 'react'
import MakeForm from './MakeForm'
import {URI} from "../defiens"
import "../styles/register.css"
import useFetch from '../hooks/useFetch'
import {useDispatch} from "react-redux"
import {login} from "../store/action"
export default function Register() {
    const uri=URI+"register"
    const dispatch=useDispatch()
    const [url,setUrl]=useState()
    const [body,setBody]=useState()
    const {data,error}=useFetch(url,{},"post",body)
    const username=useRef()
    const pass=useRef()
    const submit=()=>{
        console.log()
        const bb={username:username.current.value,password:pass.current.value}
        setBody(bb)
        setUrl(uri)
    }
    let inputs=[
        {
            name:"username",
            type:"text",
            placeholder:"نام کاربری",
            ref:username,
            error:null
        },
        {
            name:"password",
            type:"password",
            placeholder:"رمز",
            ref:pass,
            error:null
        }
    ]
    if(error.data){
        if(error.data.path==="username")
        {
            inputs[0].error=error.data.kind
        }
        else{
            inputs[1].error=error.data.kind
        }
    }
    if(Object.keys(data).includes("username")){
        dispatch(login(data.username))
    }
    return (
        <div className="register">
            <div className="inside">
            <MakeForm inputs={inputs} submittext={"ثبت نام"} onsubmit={(e)=>{submit();e.preventDefault()}}/>
            </div>
        </div>
    )
}
