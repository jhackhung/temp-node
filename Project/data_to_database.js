const { readFileSync, writeFileSync, readFile, writeFile } = require('fs')

console.log('start')

readFile('./account.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result

    writeFile(
        './database/data.txt',
        `Here is the first result:\n${first}`
        ,(err, result) => {
            if(err){
                console.log(err);
                return
            }
            console.log("done with this tast");
        }
    )
})
console.log('starting next task')

// If I just want to update the new Account, how to write?