import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Episode} from "./Episode";
import {Pagination} from "../Pagination";
import {episodeActions} from "../../store";

const Episodes = () => {
    const dispatch = useDispatch();
    const {results} = useSelector(state => state.episode);
    
    
    const [query] = useSearchParams({page:'1'});
    const page = query.get('page');



    useEffect(() => {
        dispatch(episodeActions.getAll(page))
    }, [dispatch, page]);

    return (
        <div >
            <div className='episodes-box'>
                {results.map(episode=><Episode key={episode.id} episode={episode}/>)}
            </div>
            <Pagination/>
        </div>
    );
};

export {Episodes};