module.exports.registerValidation = (username,password)=>{
    const errors=[];

    if(username===""){
        errors.push({message : "Please fill the username area"});
    }

    if(password===""){
        errors.push({message : "Please fill the password area"});
    }   

    if(password.length < 6){
        errors.push({message : "Please Minimum Length Must be 6"});
    }   
    return errors;
}