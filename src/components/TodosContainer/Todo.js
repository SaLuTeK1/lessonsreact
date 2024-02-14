const Todo = ({todo}) => {
    const {id,userId,title,completed} = todo
    return (
        <div>
            <hr/>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <div>completed:{completed.toString()}</div>
            <hr/>
        </div>
    );
};

export {Todo};