const Comment = ({comment}) => {
    const {postId,name,body,email} = comment;
    return (
        <div>
            <hr/>
            <p>postId:{postId}</p>
            <p>name:{name}</p>
            <p>body:{body}</p>
            <p>email:{email}</p>
        </div>
    );
};

export {Comment};