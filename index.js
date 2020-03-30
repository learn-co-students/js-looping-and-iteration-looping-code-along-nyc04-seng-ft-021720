// Code your solutions in this file
function writeCards(nameArr, eventName){
  const responses = [];
  for (let i = 0; i < nameArr.length; i++){
    responses.push(`Thank you, ${nameArr[i]}, for the wonderful ${eventName} gift!`);
  }
  return responses;
}

function countDown(num){
  while ( num >= 0 ){
    console.log(num);
    num -= 1;
  }
}