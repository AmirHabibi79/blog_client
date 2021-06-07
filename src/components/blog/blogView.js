import {useParams} from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import Item from "../blog/blogItem"
import {URI} from "../../defiens"
import { useState } from "react"
import "../../styles/blogview.css"
import Comment from "../comment/comment"
const Blogview=()=>{
    const {id}=useParams()
    const [uri,setUri]=useState(new URL(URI+"postview/"+id))
    const {data,loading,error}=useFetch(uri)
    return(
        <div className="blogview">
        {
            loading && <h1>loading...</h1>
        }
        {
            data && 
            <>
            <Item cm={<Comment id={id} cm={data.comments}/>} notlink title={data.title} body={data.body} user={data.user} createdAt={data.createdAt} modifiedAt={data.modifiedAt} id={data._id}/>
            
            </>
        }
        {
            error && <h1>{error}</h1>
        }
        </div>
    )
}
export default Blogview