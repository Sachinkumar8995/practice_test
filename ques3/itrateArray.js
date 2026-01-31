let arr = [2,3,4,5,6,7,8,9];

const newArr = arr.map((num) => {
    if(num % 2 === 0){
        return num*num;
    }else{
        return num;
    }
})

console.log(newArr);