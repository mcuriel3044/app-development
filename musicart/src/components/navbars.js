import React from 'react'
import {Link} from 'react-router-dom'


const Navbars = function(){
    return(
        <>
            <nav className='navbar'>
                
                <div className='btngroup'>
                    <button><Link to="/home">HOME</Link></button>
                    <button><Link to="/karolg">KAROL G</Link></button>
                    <button><Link to="/badbunny">BAD BUNNY</Link></button>
                    <button><Link to="/taylor">TAYLOR SWIFT</Link></button>
                    <button><Link to="/about">ABOUT US</Link></button>
                </div>

            </nav>

        </>
    )
}

export default Navbars;