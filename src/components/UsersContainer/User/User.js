import {useNavigate} from "react-router-dom";

import css from './User.module.css'

const User = ({user}) => {
    const {id,name} = user;
    const navigate = useNavigate();
    return (
        <div className={css.UserBox}>
            <p className={css.UserText}>Id:{id}</p>
            <p className={css.UserText}>Name:{name}</p>
            <button onClick={()=>navigate(id.toString())}>More</button>
        </div>
    );
};

export {User};