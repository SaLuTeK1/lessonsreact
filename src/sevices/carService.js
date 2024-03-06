import {apiService} from "./apiService";
import {urls} from "../constants";

const carService = {
    getAll:()=>apiService.get(urls.cars.base),
    create:(data)=>apiService.post(urls.cars.base,data),
    delete:(id)=>apiService.delete(urls.cars.byId(id)),
    updateById:(id,data)=>apiService.put(urls.cars.byId(id),data)
}
export {carService}