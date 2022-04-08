const { readFile } = require('fs')

console.log('Started the first task')
// Check the file PATH
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('complete the first task');
})
console.log('starting the next task');
