const request = require("./request").request
const config = require("./config.json")

//登陆
let Login = async (id,password)=>{
    let response = await request(`post`, `${config.Login}`, {
        account:id,
        password:password
    })
    return JSON.parse(JSON.stringify(response))
}
//电感
let Inductance = async()=> {
    let response = await request(`get`, `${config.Inductance}`)
    return JSON.parse(JSON.stringify(response))
}
//电阻
let Resistance = async()=> {
    let response = await request(`get`, `${config.Resistance}`)
    return JSON.parse(JSON.stringify(response))
}
//电容
let  Capacitance = async()=> {
    let response = await request(`get`, `${config.Capacitance}`)
    return JSON.parse(JSON.stringify(response))
}
//查找
let Search = async(typeid,pname)=>{
    let response = await request(`post`,`${config.Search}`,{
        typeid:typeid,
        pname:pname
    })
    return JSON.parse(JSON.stringify(response))
}

export default {
    Login:Login,
    Inductance:Inductance,
    Resistance:Resistance,
    Capacitance:Capacitance,
    Search:Search
}