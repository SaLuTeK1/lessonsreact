const baseURL = 'https://rickandmortyapi.com/api'
const episodes = '/episode'
const characters = '/character'

const urls = {
    episodes:{
        base:episodes,
        byId:(id)=>`${episodes}/${id}`
    },
    characters:{
        base:characters,
        byId:(id)=>`${characters}/${id}`
    }
}

export {urls,baseURL}