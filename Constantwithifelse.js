const fanswitch = true
//now fanswitch is act as boolean

if(!fanswitch){
console.log("yes switch was on")
console.log(fanswitch)
}
else{
console.log("no the switch was off")
console.log(fanswitch)
}

//output : yes switch was on

//now as per const the value should be changed, but if we give not condition for if, if(!fanswitch)
//output " no the switch was off"

//reason here constant value not changed, but not operation will work inside if loop and it doesn't change the value.