import css from './Launch.module.css'
const Launch = ({launch}) => {
    const {flight_number,launch_year,mission_name,links,mission_patch_small} = launch;
    return (
        <div className={css.Launch}>
            <div>{flight_number}</div>
            <div>{launch_year}</div>
            <div>{mission_name}</div>
            <div>
                <img src={links.mission_patch_small} alt={mission_name}/>
            </div>

        </div>
    );
};

export {Launch};