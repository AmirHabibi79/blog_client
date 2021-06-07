import {useEffect,useState} from "react"
const useClick=(clas,method="in")=>{
    const [click,setClick]=useState(false)
    useEffect(()=>{
        function clickHandler(e){
            if(method==="out"){
                if(!e.target.closest(clas)){
                    setClick(true)
                }else{
                    setClick(false)
                }
            }else{
                if(e.target.closest(clas)){
                    setClick(true)
                }else{
                    setClick(false)
                }
            }
        }
        window.addEventListener("click",clickHandler)
    },[clas])
    return click
}
export default useClick