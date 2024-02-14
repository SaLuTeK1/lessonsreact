const Album = ({album}) => {
    const {id,title,userId} = album
    return (
        <div>
            <hr/>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <hr/>
        </div>
    );
};

export {Album};