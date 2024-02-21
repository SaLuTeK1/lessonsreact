const baseURL = 'https://rickandmortyapi.com';

const character = 'character'
const episode = 'episode'
const urls = {
    character:{
        base:`/api/${character}`,
        byId:(id)=>`/api/${character}/${id}`
    },
    episode:{
        base:`/api/${episode}`,
        byId:(id)=>`/api/${episode}/${id}`
    }
}
export {urls,baseURL}