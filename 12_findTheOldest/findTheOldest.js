const findTheOldest = function(people) {
    for (let each of people) {
        if (!('yearOfDeath' in each)) {
            const today = new Date();
            each.yearOfDeath = today.getFullYear();
        }
    }
    people.map(person => person.age = person.yearOfDeath - person.yearOfBirth);
    people.sort((a, b) => a.age > b.age ? -1 : 1)[0];
    people = people[0];
    return people;
};

// Do not edit below this line
module.exports = findTheOldest;
