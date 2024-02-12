const Comment = ({comment}) => {
    const {id,postId,body,name,email} = comment;
    return (
        <div>
            <div>PostId:{postId}</div>
            <div>Id:{id}</div>
            <div>Name:{name}</div>
            <div>email:{email}</div>
            <div>body{body}</div>
        </div>
    );
};

export {Comment};