//1. promise pending 상대
// const promise =  new Promise(()=>{
//     setTimeout(()=>{
//         console.log("hello");
//     },2000);
// });

// console.log(promise);
//2.promise fulfilled
// const promise2 =  new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("hello");
//         resolve("완료!");
//     },2000);
// });
// setTimeout(()=>{
//     console.log(promise2);
// },3000)
//3.promise reject
// const promise3 =  new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("hello");
//         reject("실패!");
//     },2000);
// });
// setTimeout(()=>{
//     console.log(promise3);
// },3000)
// 4. promise 실제 적용
// const promise4 =  new Promise((resolve,reject)=>{

//     //excutor
//         setTimeout(()=>{
//             const num=0;
//             if(typeof num ==='number'){
//                 resolve(num+10);
//             }else{
//                 reject(`${num}은 숫자가 아닙니다.`);
//             }
//         },2000);
//     });

// setTimeout(()=>{
//     console.log(promise4);
// },2000)
// //5. promise

// const promise5 =  new Promise((resolve,reject)=>{
//     //excutor
//         setTimeout(()=>{
//             const num="수";
//             if(typeof num ==='number'){
//                 resolve(num+10);
//             }else{
//                 reject(`${num}은 숫자가 아닙니다.`);
//             }
//         },2000);
//     });

// promise5.then((value)=>{
//     console.log(value);
// }).catch((value)=>{
//     console.log(value);
// });

// //7. 함수를 통해서 promise 실행하기
// function add(num){
//     const promise =  new Promise((resolve,reject)=>{
//         //excutor
//             setTimeout(()=>{
//                 if(typeof num ==='number'){
//                     resolve(num+10);
//                 }else{
//                     reject(`${num}은 숫자가 아닙니다.`);
//                 }
//             },2000);
//         });
//         return promise;
// }

// const promise12=add(null);
// promise12.then((value)=>{
//     console.log(value);
// }).catch((value)=>{
//     console.log(value);
// })
//8. 
// const promise7 = add(10);
// promise7.then((value)=>{
//     console.log(value);
//     const promise8 = add(20);
//     promise8.then((result)=>{
//             console.log(result);
//         }).catch((value)=>{
//             console.log(result);
//         })
// }).catch((value)=>{
//     console.log(value);
// })
//해결
// const promise7 = add(null);
// promise7.then((value)=>{
//     console.log(value);
//     return add(null);
// }).then((value)=>{
//     console.log(value);
// }).catch((value)=>{
//     console.log(value);
// })

function orderfood(food){
    console.log(`${food}조리를 시작`);
    const promise = new Promise((resolve,reject)=>{
       setTimeout(()=>{
        const flag = true
        if(flag === true){
            resolve(`${food}`);
        }else{
            reject(`${food}조리가 실패`);
        }
       },2000) 
    })
    return promise
};

function coolingfood(food){
    console.log(`${food}식히기 시작`);
    const promise = new Promise((resolve,reject)=>{
       setTimeout(()=>{
        const flag = true
        if(flag === true){
            resolve(`식은${food}`);
        }else{
            reject(`${food}식히기 실패`);
        }
       },2000) 
    })
    return promise
};

function freezefood(food){
    console.log(`${food}냉동 시작`);
    const promise = new Promise((resolve,reject)=>{
       setTimeout(()=>{
        const flag = true
        if(flag === true){
            resolve(`냉동 ${food}`);
        }else{
            reject(`${food}냉동 실패`);
        }
       },2000) 
    })
    return promise
};

orderfood("밥").then((value)=>{
console.log(value);
return coolingfood("밥");
}).then((value)=>{
console.log(value);
return freezefood("밥");
}).then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value+"조리실패");
});