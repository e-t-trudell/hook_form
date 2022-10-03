import React, { useState } from  'react';
    
const SlingHook = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset, a reset would also clear the form
        e.preventDefault();
        
        // create a javascript object to hold all of the values
        // property value shorthand can be used here if the key and the value are the same
        const newUser = { firstname, lastname, email, password };
        console.log("Did you bring brownies", newUser);
        // these are only possible if the two way data binding from the use of value on lines 32,36,40,44
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    };
    // the last div below displays info being entered into the form
    return(
        <form onSubmit={ createUser }>
            <div class='formInput'>
                <label>First Name: </label> 
                <input id='moveme' type="text" onChange={ (e) => setFirstName(e.target.value) } value={firstname}/>
            </div>
            <div class='formInput'>
                <label>Last Name: </label> 
                <input id='moveme' type="text" onChange={ (e) => setLastName(e.target.value) }value={lastname} />
            </div>
            <div class='formInput'>
                <label>Email Address: </label> 
                <input id='moveme' type="text" onChange={ (e) => setEmail(e.target.value) } value={email}/>
            </div>
            <div class='formInput'>
                <label>Password: </label>
                <input id='moveme' type="password" onChange={ (e) => setPassword(e.target.value) } value=  {password}  />
            </div>
            <div class='formInput'>
                <label>Confirm Password: </label>
                <input id='moveme' type="password" />
            </div>
            <input type="submit" value="Create User" />
            
            <div class='displayMe'>
                <h3>Your Form Data</h3>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {password}</p>
            </div>
        </form>
        
    );
};
    
export default SlingHook;