import {useEffect, useState} from "react";
import {commentService} from "../../services/commentService";
import {Comments} from "../Comments/Comments";
import {CommentsForm} from "../CommentsForm/CommentsForm";

const CommentsBox = () => {
    const [comments,setComments] = useState([])
    useEffect(() => {
        commentService.getAll().then(({data})=>setComments(data))

    }, []);

    return (
    <div>
            <CommentsForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsBox};