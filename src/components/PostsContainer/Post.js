const Post = ({posts}) => {
    const {id,userId,title,body} = posts;
    return (
        <div>
            <p>id:{id}</p>
            <p>userId:{userId}</p>
            <p>title:{title}</p>
            <p>body:{body}</p>
        </div>
    );
};

export {Post};