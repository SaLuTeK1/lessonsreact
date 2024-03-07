import {apiService} from "./apiService";
import {urls} from "../constants";

const episodeService = {
    getAll:(page)=>apiService.get(urls.episodes.base,{params:{page}})
}

export {episodeService}