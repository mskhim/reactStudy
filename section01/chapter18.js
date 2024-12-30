//1. 주문하는 상황 비동기처리
function orderFood(food,callmake){
    console.log(food+"조리중");
setTimeout(()=>{
    callmake(food);
},3000);
};
function coolFood(food,callmake){
    console.log(food+"식히는중");
setTimeout(()=>{
    callmake(food);
},3000);
};

function freezeFood(food,callmake){
    console.log(food+"얼리는중");
setTimeout(()=>{
    callmake(food);
},3000);
};
//2단계 주문하고 재주문
orderFood("떡볶이",(food)=>{
console.log(food+"조리완료");
coolFood(food,(food)=>{
    console.log(food+"식히기 완료");
    freezeFood(food,(food)=>{
        console.log(food+"냉동완료");
    })
})
})


// function cooling(food,cooling){
// console.log(food+"조리중")
// setTimeout(()=>{
//     console.log(food+"조리완료, 식히는중")
//     setTimeout(()=>{
//         cooling(food);
//     },2000)
// },3000)
// };


// cooling("밥",(food)=>{
//     console.log(food+"완성");
// });
//2. +식혀주세요