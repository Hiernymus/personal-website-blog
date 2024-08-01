const fs = require('fs')

module.exports = (page)=>{
    const data = fs.readFileSync('./pages/'+decodeURI(page.page))
    return JSON.stringify({
        data: data.toString()
    })
}