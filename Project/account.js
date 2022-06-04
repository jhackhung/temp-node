const { readFileSync, writeFileSync } = require('fs')

function Account(name, number, feature) {
    Object.defineProperties(this, {
        name: {
            get: () => name
        },
        number: {
            get: () => number
        },
        feature: {
            get: () => feature
        }
    });
    this.toString = () => `{
        name: ${this.name}
        number: ${this.number}
        feature: ${this.feature}
    }`
}

console.log('start')

let acct1 = new Account('John', '123-456', 'Demand');
let acct2 = new Account('Justin Lin', '123-4567', 'Assist');
let acct3 = new Account('Monica Huange', '987-65432', 'Demand');
let acct4 = new Account('Irene Lin', '135-642541', 'Assist');

// How to input and decrease the parameter?

let ls = [acct1, acct2, acct3, acct4]
for (let i = 0; i <= 4; i++)
    writeFileSync(
        './account.txt',
        `${ls[i].toString()}\n`,
        {flag: 'a'}
    )
    console.log("done with this task")
    console.log('starting the next one')

// TypeError: Cannot read property 'toString' of undefined
