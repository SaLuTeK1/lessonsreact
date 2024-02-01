
const Simpson = ({simspon}) => {
    const {name,surname,age,info,img} = simspon;
    return (
        <div>
            <h1>{name} {surname}</h1>
            <p>Вік: {age}</p>
            <p>{info}</p>
            <img alt={name} src={img}/>
        </div>
    );
};

export  {Simpson};