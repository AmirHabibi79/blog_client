import React from "react"
const withHOC=(Component,data)=>{
    
    const NewCom=props=>{

        return <Component {...props} {...data}/>
    }
 
    
    return NewCom
}

export default withHOC