import {useForm} from "react-hook-form";
import {commentService} from "../../services/commentService";


const CommentsForm = ({setComments}) => {
    const {reset,register,handleSubmit} =useForm()
    const save = (comment) =>{
        console.log(comment)
        commentService.create(comment).then(({data})=> setComments(prev=>[...prev,data]))
        reset();
    }
    return (
         <form onSubmit={handleSubmit(save)}>
             <input type="text" placeholder="PostId" {...register('postId')}/>
             <input type="text" placeholder="Name" {...register('name')}/>
             <input type="text" placeholder="Email" {...register('email')}/>
             <input type="text" placeholder="Body" {...register('body')}/>
             <button>Save</button>
         </form>
    );
};

export {CommentsForm};