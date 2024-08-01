const fs = require('fs')

module.exports = ()=>{
    return JSON.stringify(fs.readdirSync("./pages"))
}