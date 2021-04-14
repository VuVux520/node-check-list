const axios = require('axios')

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

