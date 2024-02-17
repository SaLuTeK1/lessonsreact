import {useNavigate} from "react-router-dom";

import css from './UserDetails.module.css';
const UserDetails = ({userDetails}) => {
    const {id,name,username,email,address,website} = userDetails

    const navigate = useNavigate();
    return (
        <div className={css.DetailsBox}>
            <p>Id:{id}</p>
            <p>Name:{name}</p>
            <p>Username:{username}</p>
            <p>Email:{email}</p>
            <p>Street:{address.street}</p>
            <p>Website:{website}</p>
            <button onClick={()=>navigate('posts')}>Post of current user</button>
        </div>
    );
};

export {UserDetails};