import {CommentsForm} from "../CommentsForm/CommentsForm";
import {Comments} from "../Comments/Comments";
import {useEffect, useState} from "react";
import {commentService} from "../../services/commentService";

const CommentsBox = () => {
    const [comments,setComments] = useState([])
    useEffect(() => {
        commentService.getAll().then(({data})=>setComments(data))

    }, []);

    return (
    <div>
            <CommentsForm/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsBox};