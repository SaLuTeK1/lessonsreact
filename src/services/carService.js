import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const carService = {
    create:(data)=>apiService.post(urls.cars.base,data),
    getAll:()=>apiService.get(urls.cars.base),
    delete:(id)=>apiService.delete(urls.cars.byId(id)),
    updateById:(id,data)=>apiService.put(urls.cars.byId(id),data)
}
export {carService}