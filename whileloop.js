let a = 0
while(a<5){
   // a++//output of a++ and log is 1 2 3 4 5
  // ++a // output of ++a and log is 1 2 3 4 5
    console.log(a)
    a++ //output of log and a++ is 0 1 2 3 4
    
    //if while not get fail then it will log infinite time, so always while should have condition to get fail

}

//while support both condition and statement, for support only condition

let b = true
while(b){
    console.log(b)
    b = false

}
// true become false so loop will not execute 2nd time.