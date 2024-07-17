import React from "react";
import './index.css'

const User = function(props){
    return(
        <div> 
            <section className= "card">
                <a>
                    <img src={props.image} alt="boy_day_heart"/>
                </a>
                <div className="content">
                    <a className="author"> {props.name} </a>
                </div>
                <div className="metadata">
                    Today at <span className="date"> {props.date} </span>
                </div>
                <div className="comment">
                    "{props.comments}"
                </div>
            </section>
        </div>
    )
}
export default User;

