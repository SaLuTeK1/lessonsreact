import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentService = {
    getAll:()=> apiService.get(urls.comments),
    create:(data)=>apiService.post(urls.comments,data)
}

export {
    commentService
}