import axios from 'axios'
import React, {useState} from 'react'
import "../css/SignIn.css";

function SignIn() {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitdHandler = (event) => {
        event.preventDefault();

        console.log('Email', Email)
        console.log('Password', Password)

    }

    return (
        <div className="SignInForm">
            <div className="SignForm">
                <form onSubmit={onSubmitdHandler}>

                    <label >E-mail</label>
                    <input type="email" value={Email} onChange={onEmailHandler}/>

                    <label >Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler}/>

                    <br/>
                    <button >
                        OK!
                    </button>

                </form>
            </div>
        </div>
    )
}

export default SignIn
