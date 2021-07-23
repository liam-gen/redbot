module.exports = (Client) => {
    console.log(`Client : ${Client.user.tag}`)
    Client.user.setActivity('RedBot')
}