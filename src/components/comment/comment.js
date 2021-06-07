import {useSelector} from "react-redux"
import MakeForm from "../MakeForm"
import "../../styles/comment.css"
import { useRef, useState } from "react"
import axios from "axios"
import { URI } from "../../defiens"
const date=new Date()
const Comment=({cm,id})=>{
    const cmIn=useRef()
    const state=useSelector(state=>state.auth)
    const [data,setData]=useState([])
    const [error,setError]=useState(false)
    let inputs=[
        {
            name:"cm",
            type:"text",
            placeholder:"کامنت",
            ref:cmIn,
            error:error
        },
    ]
    const sendCm=()=>{
        const body={ 
            text:cmIn.current.value,
            postid:id}
        axios({
            url:URI+"comment/add",
            method:"post",
            withCredentials:true,
            data:body
        }).then(res=>{setData(preData=>[...preData,res.data]);cmIn.current.value=""})
        .catch(err=>setError(err.response.data.kind))
    }
    const commentInput=()=>{
        return(
            <MakeForm submittext="ارسال" inputs={inputs} onsubmit={(e)=>{e.preventDefault();sendCm()}}/>
        )
    }
    return(
        <div className="comment">
            <>
            {cm.map(c=>(
                <div className="cm-content">
                <div className="cm-detail">
                    <h1>{c.user}</h1>
                    <span>{date.toDateString(c.createdAt)}</span>
                </div>
                <p>{c.text}</p>
                </div>
            ))}
            {
                data.map(c=>(
                    <div className="cm-content">
                    <div className="cm-detail">
                        <h1>{c.user}</h1>
                        <span>{date.toDateString(c.createdAt)}</span>
                    </div>
                    <p>{c.text}</p>
                    </div>
                ))
            }
                <div className="cm">
                    {state[0]?commentInput():<h1>برای گذاشتن کامنت باید وارد حساب کاربری خود شوید</h1>}
                </div>
            </>
        </div>
    )
}
export default Comment