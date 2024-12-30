//1. push 배열에 요소 첨가
let array1 = [];
array1.push(1);
let date5 = new Date();
//객체구조분해할당을 이용해서 함수에 매개ㅅ변수로 ㅂ다는방법
let person={
    name:"kim",
    age:27,
    hobby:"134"
}

const f= ({name,age})=>{
    console.log(name,age);
}
f(person);
//1스프레드 연산자
