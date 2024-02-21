import css from './Character.module.css'
const Character = ({character}) => {
    const {id,name,image,status,species} = character
    return (
        <div className={css.CharacterBox}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>status:{status}</div>
            <div>species:{species}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};