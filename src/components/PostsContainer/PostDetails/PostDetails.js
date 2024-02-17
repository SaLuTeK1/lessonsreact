import css from './PostDetails.module.css'
const PostDetails = ({details}) => {
    const {userId,id,title,body} = details

    return (
        <div className={css.PostDetailsBox}>
            <p>userId:{userId}</p>
            <p>id:{id}</p>
            <p>title:{title}</p>
            <p>body:{body}</p>
        </div>
    );
};

export {PostDetails};