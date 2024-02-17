import {useLoaderData} from "react-router-dom";
import {PostDetails} from "../components/PostsContainer/PostDetails/PostDetails";
import {Comments} from "../components/CommentsContainer/Comments/Comments";

const PostDetailsPage = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <PostDetails details={data}/>
            <Comments details={data}/>
        </div>
    );
};

export {PostDetailsPage};