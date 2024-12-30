//async
async function getDate() {
    

    return {name: "kms",
            id : "msk"
    }
};

// console.log(getDate())

//3. awit : async 내부에서만 사용이가능한 키워드
//비동기 함수가 다 처리되기를 기다리게함
async function printData() {
    getDate().then((value)=>{
        console.log(value);
    }).catch((value)=>{
        console.log(value);

    })
}
// printData();
async function printData2() {
    const data = await getDate();
    console.log(data);
};
printData2();