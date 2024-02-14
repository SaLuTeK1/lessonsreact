import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentsService = {
    getAll:()=>apiService.get(urls.comments.base),
    getPostById:(postId)=>apiService.get(urls.posts.byId(postId))
}

export {commentsService}