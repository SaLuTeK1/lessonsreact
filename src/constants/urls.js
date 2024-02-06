const baseURL = 'https://api.spacexdata.com/v3'

const launches = '/launches'

const urls = {
    launches:{
        base:launches,
        byId:(id)=>`${launches}/${id}`
    }
}

export {baseURL,urls}