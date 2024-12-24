//콜백함수 : 자바 콜백함수 (service doget dopost)
//
function repeat(callback){
    for(let i=0;i<10;i++){
        callback(i);
    }
}
function callback(i){
    console.log(i*4);
}
repeat((i)=>{
console.log(i*5);
});