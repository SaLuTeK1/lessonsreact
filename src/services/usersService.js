import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const usersService ={
    getAll:()=>apiService.get(urls.users.base),
    getById:(id)=>apiService.get(urls.users.byId(id)),
    getPostByUser:(id)=>apiService.get(urls.users.postsByUser(id))
}

export {usersService}

// getAll:async ()=>
// {
//     await new Promise(resolve => setTimeout(()=>resolve(),1000))
//     return await apiService.get(urls.users.base)
// }  - додавання затримки