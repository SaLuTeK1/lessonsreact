import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {episodeActions} from "../../store";

const Episode = ({episode}) => {
    const {id,name,episode:episodeNumber, characters} = episode;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toCharacters = () =>{
        const ids = characters.map(character=>character.split('/').slice(-1)[0]).join(',');
        navigate(`/characters/${ids}`)
        dispatch(episodeActions.chosenEpisode(episodeNumber))
    }

    return (
        <div className='episode-box' onClick={toCharacters}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>episodeNumber:{episodeNumber}</div>
            <div></div>
        </div>
    );
};

export {Episode};