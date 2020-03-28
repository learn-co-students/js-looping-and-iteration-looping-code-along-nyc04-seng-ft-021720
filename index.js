// Code your solutions in this file


function writeCards(arrayOfStrings,eventName){
  const array = []
    for(let i = 0; i < arrayOfStrings.length; i++){
       array.push(`Thank you, ${arrayOfStrings[i]}, for the wonderful ${eventName} gift!`)
    }
    return array
}


F

function countDown(number){ 
    let i = 0 
    while(i < number ){
        console.log(number)
        number -= 1
    }
    console.log(number)
}