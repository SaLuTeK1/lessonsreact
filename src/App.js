import React from 'react';
import {UsersContainer} from "./components/UserContainer/UsersContainer";

// Зробити компонент, в якому буде форма, за допомоги якої можливо створити
// нового юзера постовим запитом на https://jsonplaceholder.typicode.com/users



const App = () => {
    return (
        <div>
            <UsersContainer/>
        </div>
    );
};

export {App};