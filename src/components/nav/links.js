import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
const Links=({column})=>{
    const state=useSelector(state=>state.auth)
    return(
        <div className={column?"links column":"links"}>
            
            {state[0]?
            <>
            <Link className="link" to="/profile">پروفایل</Link>
            <Link className="link" to="/">صفحه اصلی</Link>
            </>:
            <>
            <Link className="link" to="/register">ثبت نام</Link>
            <Link className="link" to="/login">ورود</Link>
            <Link className="link" to="/">صفحه اصلی</Link>
            </>
            }   
        </div>
    )
}

export default Links