import css from "./Post.module.css"
const Post = ({post,getPost}) => {
    const {id,title} = post;

    return (
        <div className={css.Post}>
            <div>Id:{id}</div>
            <div>Title:{title}</div>
            <button onClick={()=>getPost(post)}>Details</button>
        </div>
    );
};

export {Post};