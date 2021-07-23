const util = require('../../utils.js')
module.exports = (Client, message, command, code, err) => {
    util.addError(code, err)
    message.channel.send(`Code error : ${code}.\nPour plus d'informations veuillez contacter le support evac le code si dessus !`)
}