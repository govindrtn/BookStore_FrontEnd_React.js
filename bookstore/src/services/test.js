
// let number = 5 

// let firstTerm = 0 
// let SecondTerm = 1
// let nextTerm

// for(let i = 1 ; i<= number;i++){
//     console.log(firstTerm);
//     nextTerm = firstTerm + SecondTerm
//     firstTerm = SecondTerm
//     SecondTerm = nextTerm
// }


// let num = 2 


// let arr = [2,4,34,2,2,4,1,7,2,35,5,6]

// let evenArr  = []
// let oddArr = []

// for(let i = 0 ; i <arr.length;i++){
//     if(arr[i] % 2 === 0 ){
//         evenArr.push(arr[i])
//     }else{
//         oddArr.push(arr[i])
//     }
// }

// console.log(evenArr);
// console.log(oddArr);


// let num = 5
// let fact = 1

// for(let i = 1 ; i<=num;i++){
//     fact = fact * i

// }
// console.log(fact);

// let number = 12

// for(let i = 1; i <= number; i++){
//     if(number%i == 0){
//         console.log(i);
//     }
// }


// async function func(){
//     console.log("async function");
//     return Promise.resolve("promise resolved")
// }

// func().then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })


// let promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve("promise resolved ")},4000);
// })


// async function myFunc (){
//     let result = await promise;
//     console.log(result);
// }

// myFunc()



// let myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("promise resolved after 5 sec")
//     },5000)
// })


// async function myFunc (){
//     let result = await myPromise
//     console.log(result);
// }

// myFunc()



let myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promise resolved")
    }, 5000)
})


async function myfunc (){
    let result  =await myPromise
    console.log(result);
}

myfunc()