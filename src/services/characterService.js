import {apiService} from "./apiService";
import {urls} from "../constants";

const characterService = {
    getAll:()=>apiService.get(urls.character.base),
    getById:(id)=>apiService.get(urls.character.byId(id))
}

export {characterService}