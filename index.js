const fetch = require("node-fetch");
exports.repo_generator=function repo_generator(url)
{
    var secondLastIndex = url.lastIndexOf('/', url.lastIndexOf('/')-1)
    let out=url.substring(secondLastIndex)
  
    return `https://api.github.com/repos${out}`
}

exports.getData= async function (s) 
{
    
    const response=await fetch(`${s}`)
    if(response.status!==200)
    {
        throw new Error('Invalid Repo Link 🙁')
    }
    const data= await response.json()
    return data
}