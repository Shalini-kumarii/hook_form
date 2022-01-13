import React, { useState } from 'react';


const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [userError, setUserError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password,confirmpassword};
        
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const userName = (e) => {
        setUsername(e.target.value);
        if(e.target.value.length < 1) {
            setUserError("Name is required!");
             } 
        else if(e.target.value.length < 2) {
            setUserError("Name must be 2 characters or longer!");
        }

    }

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return (
        <div>
        <form onSubmit={ createUser }>
        {
            hasBeenSubmitted ? 
            <h3>Thank you for submitting the form!</h3> :
            <h3>Welcome, please submit the form.</h3> 
        }
            <div>
                <label>Username: </label>
                <input type="text" onChange={ userName } />
                {
                    userError ?
                    <p style = {{color:'red'}}>{ userError }</p>:
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
            <label> Confirm Password: </label>
            <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
            <input type="submit" value="Create User" />
        </form>
        <div>
        <h4> Form Data</h4>
        <p> User Name: {username}</p>
        <p> Email: { email } </p>
        <p> Password: { password }</p>
        <p> Confirm Password: { confirmpassword }</p>
        </div>
    </div>
    );
};

export default UserForm;
