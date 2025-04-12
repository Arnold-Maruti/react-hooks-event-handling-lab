// Code Keypad Component Here
import React from "react";
function Keypad (){
    function handleChange(){
        console.log("Entering password...")
    }
    return (
        <div className="form">
          <form>
            <input type="password" onChange={handleChange}></input>
          </form>
        </div>
    )
}

export default Keypad;