import fetch from "../../hooks/useFetch"
import {URI} from "../../defiens"
import Item from "./blogItem"
import useEnd from "../../hooks/useEnd"
import "../../styles/blog.css"
import {  useEffect, useState } from "react"
const Main=()=>{
    const[view,setView]=useState(0)
    const [url,setUrl]=useState(new URL(URI+"post/"+view))
    useEffect(()=>{
        setUrl(new URL(URI+"post/"+view))
    },[view])
    
    const {data,loading,error,hasmore}=fetch(url,[],"get")
    const end=useEnd(loading,hasmore,()=>{setView(preView=>preView+1)})
    return(
        <div id="blog" className="blog">
            {
                data.map((blog,i)=>{
                    if(data.length===i+1){
                        return(
                            <Item refc={end} key={blog._id} title={blog.title} body={blog.body} user={blog.user} createdAt={blog.createdAt} modifiedAt={blog.modifiedAt} id={blog._id}/>
                        )
                    }
                    else{
                        return(
                            <Item key={blog._id} title={blog.title} body={blog.body} user={blog.user} createdAt={blog.createdAt} modifiedAt={blog.modifiedAt} id={blog._id}/>
                        )
                    }
                }
                    
                )
            }
            {
               !loading && data.length===0?<h1>پستی وجود ندارد</h1>:""
            }
            {
                loading && <h1>Loading...</h1>
            }
            {
                error && <h1>{error}</h1>
            }
        </div>
    )
}
export default Main