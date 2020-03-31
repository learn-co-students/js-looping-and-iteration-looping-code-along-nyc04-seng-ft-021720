// Code your solutions in this file

function writeCards(people, event) {
    let arr = [];
    for (let i = 0; i < people.length; i++) {
        let msg = `Thank you, ${people[i]}, for the wonderful ${event} gift!`
        arr.push(msg)
    }
    return arr;
}

function countDown(num) {
    let i = 0;
    while (i <= num) {
        console.log(num - i);
        i++;
    }
}