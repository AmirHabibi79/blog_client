import Links from "./links"
import useResize from "../../hooks/useResize"
import "../../styles/navbar.css"
import Navsmall from "./Navsmall"
const Navbar=()=>{
    const resize=useResize(500)
    return(
        <div className="navbar">
            <h1>Blog</h1>
            {resize===false?<Links/>:<Navsmall link={<Links column/>}/>}
        </div>
    )
}

export default Navbar