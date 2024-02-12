import {Comment} from "../Comment/Comment";
const Comments = ({comments}) => {

    return (

        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>).reverse()}
        </div>
    );
};

export {Comments};