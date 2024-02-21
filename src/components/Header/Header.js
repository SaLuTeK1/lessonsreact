
import css from './Header.module.css'
import {useAppContext} from "../../hooks";

const Header = () => {

    const value = useAppContext();

    return (
        <div className={css.Header}>
            <h1>Rick & Morty</h1>
            {value ? <h3>Episode: {value}</h3> : <h3>Welcome on my page</h3>}
        </div>
    );
};

export {Header};