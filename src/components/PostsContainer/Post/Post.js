import {Link} from "react-router-dom";
import css from './Post.module.css'
const Post = ({post}) => {
    const {id,title} = post
    return (
        <div className={css.PostBox}>
            <p>Id:{id}</p>
            <Link to={`/posts/${id}`}>Title:{title}</Link>
        </div>
    );
};

export {Post};