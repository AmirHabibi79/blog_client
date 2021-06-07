import {useEffect, useState} from "react"
import axios from "axios"
const useFetch=(url,initialValue,method="get",body=null)=>{
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
    const [hasmore,setHasmore]=useState(false)
    const [data,setData]=useState(initialValue)
    useEffect(()=>{
        setLoading(true)
    if(url){
        axios({
            method:method,
            url:url,
            data:body,
            withCredentials:true,
        })
        .then(res=>{
            if(Array.isArray(initialValue)){
                if(data.length>0){
                    setData(preData=>[...preData,...res.data])
                }else{
                    setData(res.data)
                }
                setHasmore(res.data.length>0)
            }
            else{
                setData(res.data)
            }
            setLoading(false)
        })
        .catch(err=>{
            setError(err.response)
            setLoading(false)
        })
    }else{
        setError("bad request: "+url)
        setLoading(false)
    }
    },[url,body])
return {data,loading,error,hasmore}
}

export default useFetch