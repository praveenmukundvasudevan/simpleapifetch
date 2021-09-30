import React from 'react'
import { useEffect, useState } from 'react';


const Navbar = (props) => {

    return (
        <>
        
            <div className = 'navbar'>
            <div className="left">
                <h3 onClick= {() => {
                    props.click('false')
                }}>Lets Grow More</h3>
            </div>
            <div className="right">
                <button className = 'getusers' onClick = {() => {
                    props.click('ture') 
                }}>
                    Get Users
                </button>
            </div>
            </div>
        </>
        
    ) 
}

export default Navbar

