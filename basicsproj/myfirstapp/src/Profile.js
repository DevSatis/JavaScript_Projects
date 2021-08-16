import React from 'react';

export default function Profile()
{
    function testFun(){
        alert("TestFun!")
    }
        return(
            <div>
                <h1>Profile</h1>
                <button onClick={testFun}>Click me</button>
            </div>
        );    
}