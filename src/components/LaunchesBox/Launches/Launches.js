import {useEffect, useState} from "react";
import {launchesService} from "../../../services/lauchesService";
import {Launch} from "../Launch/Launch";
import css from './Launches.module.css'
const Launches = () => {

const [launches,setLaunches] = useState([]);

    useEffect(() => {
        launchesService.getAll().then(({data}) => setLaunches(data.filter(value => value.launch_year !=='2020')))
    }, []);
    return (
        <div className={css.Launches}>
            {launches.map(launch => <Launch launch={launch} key={launch.flight_number}/>)}

        </div>
    );
};

export {Launches};