import css from "./PostDetails.module.css"
const PostDetails = ({postDetails}) => {
    const {id,title,body,userId} = postDetails;
    return (
        <div className={css.PostDetails}>
            <div>Id:{id}</div>
            <div>Title:{title}</div>
            <div>UserId:{userId}</div>
            <div>Body:{body}</div>
        </div>
    );
};

export {PostDetails};