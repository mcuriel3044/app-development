import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import world from "./images/img3.jpg";
import User from './comments';
import boy_day_heart from './images/boy_day_heart_love_icon.png'
import female_girl from './images/female_girl_sister_icon.png'
import people_person from './images/people_person_profile_user_icon.png'

//create content in the app using function component
const App = function(){
//define a variable name
let fullname = "Milpa Curiel"
//declare a function
  function greeting(){
    return "Good Evening"
    }

  return(
    <div>
      <h1 style={{textAlign:"center", color: "orange"}}>Welcome to ReactJS {fullname}</h1>
      <p>{greeting()} Lets get familiar with JSX elements</p>
    
      <figure className='introimg'>
        <img src={world}/> 
      </figure>
    
{/* CARD */}
<section className='cardcontainer'>
    <User image ={boy_day_heart} name='Jessica' date='07/12/24' comments='Great Job!'/>
    <User image ={female_girl} name= 'Peter' date='07/12/24' comments='I need more time'/>
    <User image ={people_person} name= 'Jason' date='07/12/24' comments='Feeling lazy'/>
</section>
</div>
)
}
//rooting the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
