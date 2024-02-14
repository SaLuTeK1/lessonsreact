import css from "./Header.module.css"
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className={css.Header}>
            <Link to={"/albums"}>Albums</Link>
            <Link to={"/todos"}>Todos</Link>
            <Link to={"/comments"}>Comments</Link>
        </div>
    );
};

export {Header};