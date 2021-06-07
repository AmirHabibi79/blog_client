import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import {Link,useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import {logout} from "../store/action"
import {URI} from "../defiens"
import fetch from "../hooks/useFetch"
import Item from "../components/blog/blogItem"
import "../styles/profile.css"
import axios from 'axios'
export default function Profile() {
    const history=useHistory()
    const [delerr,setDelerr]=useState(false)
    const deleteHandler=(id)=>{

        axios.delete(URI+"post/"+id,{withCredentials:true})
        .then(res=>{
            if(Object.keys(res.data).includes("message")){
                getPost()
            }
        })
        .catch(err=>{setDelerr(err.response.data.kind)})
    }
    const [data,setData] =useState([])
    const [loading,setLoading]=useState(false)
    const[error,setError]=useState(false)
    const getPost=()=>{
        setLoading(true)
        axios.get(url,{withCredentials:true})
        .then(res=>{
            setLoading(false)
            setData(res.data)
        })
        .catch(err=>{
            setLoading(false)
            setError(err.response.data.kind)
        })
    }
    useEffect(()=>{
        getPost()
    },[])
    const state=useSelector(state=>state.auth)
    const dispatch=useDispatch()
    const url=URI+"user/posts"
    return (
        <div className="profile">
            <div className="pro-nav">
                <h1>{"نام کاربری: "+state[1]}</h1>
                <div className="btns">
                    <button onClick={()=>dispatch(logout())} className="btn btn-red">خروج از حساب</button>
                    <Link to="/create"><button className="btn btn-green">ساخت پست</button></Link>
                </div>

            </div>
            <div className="pro-post">
                <h3 style={{marginBottom:"10px"}}>پست های شما</h3>
                <div className="posts">
                        {loading && <h1>Loading...</h1>}
                        {error && <h1>{error}</h1>}
                        {delerr && <h1>{delerr}</h1>}
                        {data && data.length>0?data.map(blog=>(
                            <>
                            <Item key={blog._id} title={blog.title} body={blog.body} user={state[1]} createdAt={blog.createdAt} modifiedAt={blog.modifiedAt} id={blog._id}/>
                            <div  className="btns-action">
                                <button onClick={()=>history.push("edit/"+blog._id)} className="btn btn-yellow">تغییر</button>
                                <button onClick={()=>deleteHandler(blog._id)} className="btn btn-red">پاک کردن</button>
                            </div>
                            </>

                        )):<h1>شما پستی ندارید</h1>}
                </div>
            </div>
        </div>
    )
}
