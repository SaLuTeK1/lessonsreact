
import {urls} from "../constants";
import {apiService} from "./apiService";

const characterService = {
    getById:(id)=>apiService.get(urls.characters.byId(id)),
}

export {characterService}