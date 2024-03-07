import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {characterAction} from "../../store";
import {Character} from "./Character";

const Characters = () => {
    const {ids} = useParams();
    const {characters} = useSelector(state => state.character);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(characterAction.getCharacters(ids))
    }, [dispatch,ids]);

    return (
        <div>
            <div className='characters-box'>
                {characters.map(character=><Character key={character.id} character={character}/>)}
            </div>
        </div>
    );
};

export {Characters};