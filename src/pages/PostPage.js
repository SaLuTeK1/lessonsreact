import {Outlet} from "react-router-dom";

const PostPage = () => {
    return (
        <div>
            All about this post
            <Outlet/>

        </div>
    );
};

export {PostPage};