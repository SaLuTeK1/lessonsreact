import {useNavigate} from "react-router-dom";




const Comment = ({comment}) => {
    const {postId,id,name,email,body}=comment
    const navigate = useNavigate()
    return (
        <div>
            <hr/>
            <p>postId:{postId}</p>
            <p>id:{id}</p>
            <p>name:{name}</p>
            <p>email:{email}</p>
            <p>body:{body}</p>
            <button onClick={()=>navigate('posts',{state:{postId}})}>go</button>
            <hr/>
        </div>
    );
};

export {Comment};