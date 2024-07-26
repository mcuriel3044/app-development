// July 25, 2024, JS object
//creat an object for a student with properties of name, age and email (order does not matter)
//Example 1:
let student1 = {
    name : "Peter Pan", 
    age : 23, 
    school: "QCC"
}

//retrieve information in an object using squared bracket [""]:
console.log(student1["name"])

//retrieve information using the dot:
console.log(student1.school)

//you can not use the dot notation if the key, property name, starts with  a number

//update data in an object can be done using the dot or squaredd bracket notation:
student1.age = 30
student1["school"] = "NYU"
console.log(`Updated age ${student1.age}`)
console.log(`Update school ${student1.school}`)

//Example 2: Nested object and array within an object
console.log ("\n ------- Example 2 ---------")
let user1 = {
    name: "Martha", 
    age: 80,
    //an array as property
    friends: ["Wendy", "Carl", "Peter"],
    //add object as property
    favorite: {
        food: "cake",
        color: "green"
    }
}
//access key inside an object
let favorite_food = user1.favorite.food
console.log(`${user1.name} favorite food is ${favorite_food}`)

//access an item inside an array (first has index 0, second has index 1, third has index 2 and so on)
let second_friend = user1.friends[1]
console.log (`${user1.name} second friend is ${second_friend}`)

//Example 3: ARRAY LIST AS OBJECT
console.log("\n --------Example 3--------------")
//we can also create an array with object as list items:
let schedule = [
    {
        day: "Monday",
        plan: "Go to yoga class",
        time: "6:30pm",
    },
    {
        day: "Tuesday",
        plan: "Complete bootcamp labs",
        time: "11:00pm", 
    }
]

//Access the plan for tuesday 
console.log(`The plan for Tuesday is ${schedule[1].plan}`)

//Example 4: Object Methods
console.log("\n --------Example 4--------------")
let item = {
    //properties
    id: 123,
    name: "pencil",
    quantity: 200,
    color: ['red', 'black', 'blue'],
    //methods (have functions)
    sale : function(){
        return ("SALE! 50% OFF")
    },
    quantity_cart : function(e){
        return this.quantity -= e
    }
}
//access sale () method
console.log(`The sale message of ${item.name} is ${item.sale()} `)
console.log(`The remaining quantity of ${item.name} is ${item.quantity_cart(5)}`)

/*JSON, JavaScript Object Notation, is a popular text format that is used to store and exchange data. 

JSON data is stored as comma-separated list of key: value pairs

We can convert  a JavaScript object to a JSON object by using the 'JSON.stringfy()'

We can also convert from JSON object to JavaScript object using 'JSON.parse()' method
*/
//Example 5: JSON
let fashionshow = {
    category: "fashion",
    model: [
        {
            name: "Alice",
            age: 21,
            city: "NYC"
        },
        {
            name: "Kelly",
            age: 23,
            city: "Paris"
        }
    ]
}

//print the object 'fashionshow'
console.log("\n --------Example 5--------------")
console.log(fashionshow)

//create a JSON version of the JavaScript object
let json_fashionshow = JSON.stringify(fashionshow)
console.log("JSON version: ")
console.log(json_fashionshow)
