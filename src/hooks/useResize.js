import {useEffect,useState} from "react"

const useResize=(width)=>{
    const [resize,setResize]=useState()
    if(resize===undefined){
        if(width!==undefined){
            if(window.innerWidth<=width){
                setResize(true)
            }else{
                setResize(false)
            }
        }
    }
    useEffect(()=>{
        function resizeHandler(e){
            if(width!==undefined){
                if(e.target.innerWidth<=width){
                    setResize(true)
                }else{
                    setResize(false)
                }
            }
        }
        window.addEventListener("resize",resizeHandler);
    },[])
    return resize
}

export default useResize