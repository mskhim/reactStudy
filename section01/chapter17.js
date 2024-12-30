//1. 비동기처리작업
function task(time){
setTimeout(()=>{
    console.log("테스크 작업1");
},time)
};

// task(3000);
// task2(3001);
//비동기 처리 작업진행

function task2(time){
    const sum = time+100
    setTimeout(()=>{
        console.log(sum);
    },time)
    };

    function set(test){
    setTimeout(test,3000);
    };

    function add(a,b,callback){
        setTimeout(callback(a,b),3000)
    };

    add(10,20,(a,b)=>{
    console.log(a+b);
    return 300;
    })


    function add2(a,b,callback){
        setTimeout(callback,3000);
    };

    // add2(10,20)