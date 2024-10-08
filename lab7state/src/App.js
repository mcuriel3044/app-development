import React, {useState} from "react";

//-----Example 2-----
//list of three messages
const message = ["I think, therefore I am", "I have a dream", "The only thing we have to fear is fear itself"]
//add event listener to next button
/*
const next_btn = document.querySelector('.next_btn')
next_btn.addEventListener('click', function(){
  alert('NEXT button')
})
//add even listener to previous button
document.querySelector('.prev-btn').addEventListener('click', function(){
  alert ('PREVIOUS button')
})
*/function App() {
//set the  state - example 1
const [count, setCount] = useState(0)
//set the state - example 2
const [counter, setCounter]= useState(1)
//set the state - example 3
const [isOpen, setIsopen] = useState(false)
//set the state to collect name - example 4
//collecting multiple input data as states
const [inputdata, setInputdata] =  useState("")

//function  to collect the changes of each input data
const handledata = function(e){
  const name = e.target.name
  const value = e.target.value
  setInputdata(values => ({...values, [name]: value})) //spread
}

//submit function
const submitform = function (e) {
  e.preventDefault()
  alert(`Name: ${inputdata.fullname} \nAge ${inputdata.age} \nGender ${inputdata.gender} \nSuggestions: ${inputdata.usercomments}`)
}

return (
    <>
      <h1 className="title">Example 1</h1>
     <p>The count is = {count}</p>
     <button className='incrementbtn' onClick={function(){setCount(count+1)}}>Increment</button>

    <h1 className="title">Example 2: slice app</h1>
    <section className="slicecontainer">
      <div className="slicewrapper">
        <div className={counter==1? "active":""}>1</div>
        <div className={counter==2? "active":""}>2</div>
        <div className={counter==3? "active":""}>3</div>
      </div>
      <p className="displaymsg">"{message[counter-1]}"</p>

      <div className="groupbtn"></div>
      <button className="prev_btn" onClick={function(){if(counter>1)setCounter(counter-1)}}>Previous</button>
      <button className="next_btn" onClick={function(){if(counter<3)setCounter(counter+1)}}>Next</button>
    </section>

    <h1 className="title"> Example 3: open and close button</h1>
    <section classsName="intro">
      <b>Cat (Felis catus)</b>, commonly referred to as the domestic cat or house cat  
      <button onClick={function(){setIsopen(!isOpen)}}>{isOpen ?"Hide" : "Read More"} </button>
    </section>

    <section>
      {isOpen &&
        (
      <div className="readmore">
        The cat(felis catus), commonly referred to as the domestic cat or house cat, a small domesticated carnivorous mamamal.  It is the only domesticated species of the family Felidae.  Recent advances is archaeology and genetics have shown that the domestication of the cat occured in the Near East around 7500 BC.
      </div>
      )}
    </section>

  <h1 className="title">Example 4: forms</h1>
  <section>
    <form className="signupForm" onSubmit={submitform}>
      <fieldset>
        <legend>Sign Up</legend>
        <div className="formcontrol">
        <lable form="name">Enter name: </lable>
        <input  
        id="name" 
        type="text" 
        placeholder="Type your name..."
        name="fullname"
        value={inputdata.fullname}
        onChange={handledata}
        />
        </div>
        <div className="formcontrol">
        <lable form="age">Enter an age: </lable>
          <input  
          id="age" 
          type="number"
          name="age"
          min={1}
          max={99}
          value={inputdata.age}
          onChange={handledata}
          />
        </div>
        
        <div className="formcontrol">
          <lable for="selectgender">Select gender: </lable>
          <select 
            id="selectgender"
            name="gender"
            value={inputdata.gender}
            onChange={handledata}
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="formcontrol">
          <lable for="comments"> Suggestions? </lable>
          <textarea 
            id="comments"
            placeholder="Max 1000 characters"
            maxLength={1000}
            name="usercomments"
            value={inputdata.usercomments}
            onChange={handledata}
            />

        </div>

        <div className="formcontrol">
          <button type="submit">Submit</button>
        </div>
      </fieldset>

    </form>
  </section>

  </>
  );
}

export default App;
