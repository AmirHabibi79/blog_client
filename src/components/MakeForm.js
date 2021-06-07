import React from 'react'
import Form from "./Form"
import Input from "./Input"
export default function MakeForm({submittext,onsubmit,inputs}) {
    return (
        <>
            <Form onsubmit={onsubmit} submittext={submittext}>
                {inputs.map((input,i)=>(
                    <Input key={i} name={input.name} error={input.error} refc={input.ref} type={input.type} placeholder={input.placeholder}/>
                ))}
            </Form>
        </>
    )
}
