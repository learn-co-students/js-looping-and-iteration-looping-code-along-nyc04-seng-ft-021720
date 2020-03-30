// Code your solutions in this file
function writeCards(names, giftType){
	const outputArray = [];
	names.forEach(name => {
		outputArray.push(`Thank you, ${name}, for the wonderful ${giftType} gift!`);
	});
	return outputArray;
}

function countDown(startingValue){
	let value = startingValue;
	while (value >= 0){
		console.log(value)
		value--
	}
}