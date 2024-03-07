const Character = ({character}) => {
    const {id,name,status,species,gender,image} = character;
    return (
        <div className='character-box'>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>status:{status}</div>
            <div>species:{species}</div>
            <div>gender:{gender}</div>
            <img alt={`${name}${id}`} src={image}/>
        </div>
    );
};

export {Character};