const User = ({user}) => {
    const {id,name,username,email} = user;
    return (
        <div>
            <div>Id:{id}</div>
            <div>Name:{name}</div>
            <div>Username:{username}</div>
            <div>Email:{email}</div>
        </div>
    );
};

export {User};