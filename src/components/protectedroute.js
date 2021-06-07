import React from 'react'
import {Route,Redirect,useParams} from "react-router-dom"
import {useSelector} from "react-redux"
import withHOC from "./withHOC"
function Protectedroute({children:Children,...rest}) {
    const {id}=useParams()
    const state=useSelector(state=>state.auth)
    const Inhance= withHOC(Children,{user:state[1],params:id})
    const content=()=>{
       if(rest.path==="/register"||rest.path==="/login"){
          if(state[0]){
             return(
               <Redirect to="/"/>
             )
          }
          else{
             return(
               <Route {...rest} > 
               {Inhance}
            </Route>
             )
          }
       }else{
         if(state[0]){
            return(
              <Route {...rest} > 
              {Inhance}
              </Route>
              
            )
         }
         else{
            return(
               <Redirect to="/"/>
            )
         }
       }
    }
    return(
       <>
         {content()}
         </>
    )
}
export default Protectedroute