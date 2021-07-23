const error = require('./erreurs.json')
const fs = require('fs')
const beta = require('./beta.json')
module.exports.dirname = function(file) {return `${__dirname}/${file}`}

module.exports.addError = function addError(code, erreur){
        error[code] = {
            erreur
        }
        fs.writeFileSync('./erreurs.json', JSON.stringify(error))
}

module.exports.sleep = async function sleep(ms) {
        return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

module.exports.addTesteur = function(id){
    beta[id] = {
        check: true
    }
    fs.writeFileSync('./beta.json', JSON.stringify(beta))
}