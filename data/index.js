const path = require('path')
const fs = require('fs').promises

const getAll = async() => {
    return JSON.parse(await fs.readFile(path.join(__dirname, 'data.json'), 'utf8'))
}

module.exports = {
    getAll,
}