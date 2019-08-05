import React from 'react'
import Button from '@material-ui/core/Button'; 

export default function login() {
    const authWithFacebook = () => {
        console.log("We are authing with Facebook")
    }
    const authWithEmail = () => {
        console.log("We are authing with Email");
    }
    return (
        <div>
            <Button variant="contained" color="primary" onClick= {() => {authWithFacebook()}} >Log In with Facebook</Button>
            <hr style={{marginTop:"10px", marginBottom: "10px"}} />
                <div style={{marginBottom: "10px"}}>

                </div>
            <Button variant="contained" color="secondary" onClick={() => {authWithEmail()}}>Log In with Email</Button>
        </div>
        
    )
    
}

