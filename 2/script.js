const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
];


function findYoungest(users) {

    let youngestUser = users[0];

    for (let i = 0; i < users.length; i++) {
        if (users[i].age < youngestUser.age) {
            youngestUser = users[i];
        }
    }

    return youngestUser.name; 
}


console.log(findYoungest(users)); 




const user = { 
    name: 'Lola', 
    age: 21 
};


function cloneUser(user) {
    const newUser = {};
    Object.entries(user).forEach(([key, value]) => newUser[key] = value)

    return newUser;
}

const userCopy = cloneUser(user);
user.age = 19;

console.log(user); 
console.log(userCopy); 





function rollDie() {
    return parseInt(Math.random() * 6) + 1;
}

function playGame() {
    let attemptsA = 0;
    let attemptsB = 0;
    let rollA = 0;
    let rollB = 0;

    while (rollA !== 3) {
        rollA = rollDie();
        attemptsA++;
    }

    while (rollB !== 3) {
        rollB = rollDie();
        attemptsB++;
    }

    if (attemptsA < attemptsB) {
        console.log(`A won in ${attemptsA} trials`);
    } else if (attemptsB < attemptsA) {
        console.log(`B won in ${attemptsB} trials`);
    } 
}

playGame();