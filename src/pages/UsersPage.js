import {Outlet, useLoaderData} from "react-router-dom";

import {Users} from "../components/UsersContainer/Users/Users";

const UsersPage = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <Outlet/>
            <hr/>
            <Users users={data}/>
        </div>
    );
};

export {UsersPage};