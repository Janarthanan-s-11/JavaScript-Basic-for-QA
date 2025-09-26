//find a number which is divided by 2 and 4 from 1 to 10

for(let a = 1; a<=10; a++)
    
    {
if(a%2 == 0 && a%4 == 0){

    console.log("value of a is "+a+" will be divided by both 2 and 4")

}else
    console.log("value of a is "+a+" won't dvided by both 2 and 4")


}

// or operation for same code

for(let i = 1; i<=10; i++){

    if(i%2 == 0 || i%4 == 0){
console.log(i)
    }
}
//output 2 4 6 8 10