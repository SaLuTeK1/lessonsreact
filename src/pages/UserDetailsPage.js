import {Outlet, useLoaderData} from "react-router-dom";

import {UserDetails} from "../components/UsersContainer/UserDetails/UserDetails";


const UserDetailsPage = () => {

    const {data} = useLoaderData()
    return (
        <div>
             <UserDetails userDetails={data}/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};