// Зробити компонент, в якому буде форма, за допомоги якої можливо створити
// нового юзера постовим запитом на https://jsonplaceholder.typicode.com/users

import {useEffect, useState} from "react";
import {userService} from "../../services/userService";
import {Users} from "./Users";
import {UserForm} from "./UserForm";

const UsersContainer = () => {
    const [users,setUsers] = useState([])

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <Users users={users}/>
        </div>
    );
};

export {UsersContainer};