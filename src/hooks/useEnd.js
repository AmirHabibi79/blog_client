import {useCallback,useRef} from "react"
const useEnd=(loading,hasmore,cb)=>{
    const observer=useRef()
    const callback=useCallback(node=>{
       if(loading) return
       if(observer.current) observer.current.disconnect()
        observer.current=new IntersectionObserver(enteris=>{
            if(enteris[0].isIntersecting && hasmore){
                cb()
            }
        })
        if(node) observer.current.observe(node)
    },[loading,hasmore])
    return callback
}
export default useEnd