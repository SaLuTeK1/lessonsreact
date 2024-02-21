import {useEffect, useState} from "react";

import {characterService} from "../../../services";
import {Character} from "../Character/Character";
import css from './CharacterUrls.module.css'

const CharacterUrls = ({characterUrl}) => {
    const urls = characterUrl.split('/');
    const id = urls[urls.length-1]

    const [character, setCharacter] = useState([])
    useEffect(() => {
        characterService.getById(id).then(({data})=>setCharacter(data))
    },[]);

    return (
        <div className={css.CharactersUrlBox}>
            <Character key={character.id} character={character}/>
        </div>
    );
};

export {CharacterUrls};