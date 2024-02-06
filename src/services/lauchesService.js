import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const launchesService = {
    getAll:()=>axiosService(urls.launches.base),
    getById:(id)=>axiosService(urls.launches.byId(id))
}

export {
    launchesService
}