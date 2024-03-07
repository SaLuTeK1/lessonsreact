import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './Header.module.css'
import {episodeActions} from "../../store";
const Header = () => {
    const {chosenEpisode} = useSelector(state => state.episode);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const back = () =>{
        navigate(-1)
        dispatch(episodeActions.chosenEpisode(null))
    }

    return (
        <div className={css.Header}>
            <div className={css.name}>
                <h1>Rick&Morty</h1>
            </div>
            <div className={css.buttonAndText}>
                <button onClick={back}>Back</button>
                {chosenEpisode&&<h3>Chosen episode: {chosenEpisode}</h3>}
            </div>
        </div>
    );
};

export {Header};