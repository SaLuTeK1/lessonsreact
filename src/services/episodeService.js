import {apiService} from "./apiService";
import {urls} from "../constants";

const episodeService ={
    getAll:(page='1')=>apiService.get(urls.episode.base,{params:{page}}),
    getById:(id)=>apiService.get(urls.episode.byId(id))
}
export {episodeService}