import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import {episodeService} from "../../../services";
import css from './Characters.module.css'
import {CharacterUrls} from "../CharacterUrls/CharacterUrls";

const Characters = () => {

    const {state} = useLocation();
    console.log(state.id)
    const [charactersAll, setCharactersAll] = useState([])

    useEffect(() => {
        episodeService.getById(state.id).then(({data})=>setCharactersAll(data.characters))
    }, [state.id]);

    const navigate = useNavigate();
    return (
        <div >
            <div>
                <button onClick={()=>navigate('/episodes')}>Back</button>
                <div className={css.CharactersBox}>
                {charactersAll.map(character=><CharacterUrls key={character} characterUrl={character}/>)}
                </div>
            </div>
        </div>
    );
};

export {Characters};