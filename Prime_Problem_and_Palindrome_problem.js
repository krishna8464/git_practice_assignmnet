// solution for prime problem
let num = 8;
let count = 0;
for (let i = 2;i<=num;i++){
    if(num%i===0){
        count++;
    }
}
if(count ==3){
    console.log(num,"is a prime number");
}else{
    console.log(num,"is not a prime number");
}

//solution for palindrom

let str = zooz;
let bag = '';
for(let i = str.length-1;i>=0;i--){
    bag = bag + str[0];
}
if(str == bag){
    console.log(str,"is a palindrom");
}else{
    console.log(str,"is not a palindrom");
}