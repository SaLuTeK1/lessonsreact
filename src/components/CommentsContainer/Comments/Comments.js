import {Comment} from "../Comment/Comment";
import {useEffect, useState} from "react";
import {commentsService} from "../../../services/commentsService";

const Comments = ({details}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentsService.getByPostId(details.id).then(({data})=>setComments(data))
    }, []);
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};