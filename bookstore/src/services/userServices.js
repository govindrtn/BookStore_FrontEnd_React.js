import axios from 'axios'

export const logIn =(loginObj)=>{
    let res = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login",loginObj)
    console.log("Login.. in process......");
    // alert("Login.. in process......");
    return res;
}


export const UserSignUp =(signUpObj)=>{
    let res = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",signUpObj )
    console.log("SignUp.. in process......");
    // alert("Login.. in process......");
    return res;
}


