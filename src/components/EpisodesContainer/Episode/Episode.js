import {Link} from "react-router-dom";

import css from './Episode.module.css'
const Episode = ({episodeInfo}) => {
    const {id,name,air_date,episode} = episodeInfo
    return (
        <div className={css.EpisodeBox}>
            <div>Id:{id}</div>
            <div>Name:{name}</div>
            <div>Air Date:{air_date}</div>
            <Link to={`/characters?episode=${id}`} state={{id,episode}}>Episode:{episode}</Link>
        </div>
    );
};

export {Episode};