import React from "react";

export const Login =({handleLogin})=>{
    const [email,setEmail] = React.useState("")
    const [password,setPassword] = React.useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        let payload = {email,password}
        handleLogin(payload)
    }

    return (
        <div>
            <h1>Login from</h1>
            <p>password:cityslicka <br /> email:eve.holt@reqres.in</p>
            <form onSubmit={handleSubmit}>

                <input onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="email"/>
                <br />
                <input onChange={(e)=> setPassword(e.target.value)} type="text" placeholder="password"/>
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}