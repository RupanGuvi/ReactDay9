import React, { useContext, useState } from 'react';
import UserContext from '../Context/UserContext';

const Login = () => {

    const [username,setuserName] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

const handleSubmit = (e)=>{
 e.preventDefault();//prevent the page from refreshing
 setUser({username,password}) 
}

    return (
       <div>
            <h1>Login</h1>
            <input
            type='text'
            value={username}
            placeholder='Enter Your User Name'
            onChange={(e)=>setuserName(e.target.value)}
            />
            {" "}
            <input
            type='password'
            value={password}
            placeholder='Enter Your Password'
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
       </div>
       
    );
};

export default Login;