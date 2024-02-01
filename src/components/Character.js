const Character = ({character}) => {
    const {
        id,
        name,
        status,
        species,
        gender,
        image} = character;
    return (
        <div>
            <div>Ім'я: {name}</div>
            <div>Id: {id}</div>
            <div>Статус: {status}</div>
            <div>Особистість: {species}</div>
            <div>Стать: {gender}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};