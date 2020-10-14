function repo_generator(url)
{
    var secondLastIndex = url.lastIndexOf('/', url.lastIndexOf('/')-1)
    let out=url.substring(secondLastIndex)
    return out
}

async function getData(s) 
{
    
    const response=await fetch(`https://api.github.com/repos${repo_generator(s)}`)
    console.log(response.status)
    if(response.status!==200)
    {
        throw new Error('Invalid Repo Link 🙁')
    }
    const data= await response.json()
    return data
}