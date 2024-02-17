import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentsService ={
    getAll:()=>apiService.get(urls.comments.base),
    getByPostId:(id)=>apiService.get(urls.comments.byPostId(id))
}
export {commentsService}