import {Link} from "react-router-dom"
import "../../styles/blog-item.css"
const date=new Date()
const Item =({title,body,cm,user,createdAt,modifiedAt,id,refc,notlink})=>{
    return(
        <div  className="blog-item">
            <h1>{user}</h1>
            <div className="blog-detial">
                <span>{"ساخته شده: "+date.toDateString(createdAt)}</span>
                {modifiedAt?
                    <span>{"تغییر داده شده: "+date.toDateString(modifiedAt)}</span>
                :""
                }
            </div>
            <div className="blog-content">
                {
                    notlink?<h1>{title}</h1>:<h1><Link to={"/post/"+id}>{title}</Link></h1>
                }
                <p ref={refc}>{body}</p>
            </div>
            {
                cm&& cm
            }
        </div>
    )
}

export default Item