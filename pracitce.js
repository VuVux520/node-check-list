const fetch = require('node-fetch')
const axios = require('axios')
const fs = require('fs')

const fetchGitHubInfo = async (url) => {
    console.log(`Fetching ${url}`);
    const gitHubUrl = await axios(url)
    return{
        name: gitHubUrl.data.name,
        bio: gitHubUrl.data.bio,
        repos: gitHubUrl.data.public_repos
    }
}

const fetchUser = async (names) =>{
    const request = names.map(name =>{
        const url = `https://api.github.com/users/${name}`
        return fetchGitHubInfo(url).then((a) => {
            return a;
        })
    })
    return Promise.all(request)
}

fetchUser(['VuVux520'])
 .then(a => console.log(JSON.stringify(a)))

 async function saveJSON(output) {
    const response = await fetch('https://api.github.com/VuVux520');
    const json = await response.json();
    const text = JSON.stringify(json);
    return await fs.writeFileSync(output, text);
 }

 async function saveJSON(){
     const result = await fs.writeFileSync(output, text);
     return result;
 }

 async function saveJSON(output) {
     return fs.writeFileSync(output,text);
 }