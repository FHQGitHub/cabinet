const request = require("./request").request
const config = require("./config.json")

let login = function () {
    let response = await request(``, ``, {

    })
    return JSON.parse(JSON.stringify(response))
}