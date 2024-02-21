import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {episodeService} from "../../../services";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css'

const Episodes = () => {
    const [episodes, setEpisodes] = useState([])

    const [query,setQuery] = useSearchParams({page:'1'});

    const [prevNext, setPrevNext] = useState({prev:null,next:null})

    useEffect(() => {
        episodeService.getAll(query.get('page')).then(({data})=> {
            setEpisodes(data.results)
            setPrevNext({prev:data.info.prev,next:data.info.next})
        })

    }, [query]);


    const prev = ()=>{
        setQuery(prev=>{
            prev.set('page',`${+prev.get('page')-1}`)
            return prev
        })
    }
    const next = ()=>{
        setQuery(prev=>{
            prev.set('page',`${+prev.get('page')+1}`)
            return prev
        })
    }
    return (
        <div className={css.MainBox}>
            <div className={css.EpisodesBox}>
            {episodes.map(episode=><Episode key={episode.id} episodeInfo={episode}/>)}
            </div>
            <button className={css.Buttons} disabled={!prevNext.prev} onClick={()=>prev()}>Prev</button>
            <button className={css.Buttons} disabled={!prevNext.next} onClick={()=>next()}>Next</button>
        </div>
    );
};

export {Episodes};