import React from 'react';
import {Posts} from "./components/PostContainer/Posts/Posts";

// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)


const App = () => {
    return (
        <div>
            <Posts/>
        </div>
    );
};

export {App};