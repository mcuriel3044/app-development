const helper = function(data){
    return `${data} is logged in.`
}
const id = function(i){
    return i
}
const email = function(e){
    return `${e}`
}

/** Can be expressed as below for multiple functions */
module.exports = {helper,id,email}

/*
module.exports.helper = helper
module.exports.id = id
module.exports.email = email
*/

