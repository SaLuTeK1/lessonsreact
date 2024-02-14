import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {commentsService} from "../../services/commentsService";
import {Post} from "./Post";

const Posts = () => {
    const {state:{postId}} = useLocation();
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        commentsService.getPostById(postId).then(({data})=>setPosts(data))
    }, [postId]);

    return (
        <div>
            <Post key={posts.id} posts={posts}/>
        </div>
    );
};

export {Posts};