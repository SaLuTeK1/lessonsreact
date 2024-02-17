import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {usersService} from "./services/usersService";
import {PostsPage} from "./pages/PostsPage";
import {postsService} from "./services/postsService";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {PostPage} from "./pages/PostPage";

const router = createBrowserRouter([
    {
        path:'',element:<MainLayout/>,children:[
            {
                index:true,element:<Navigate to={'users'}/>
            },
            {
                path:'users',element:<UsersPage/>,loader:()=>usersService.getAll(),children:[
                    {
                        path:':id',element:<UserDetailsPage/>,loader:({params:{id}})=>usersService.getById(id),children:[
                            {
                                path:'posts',element:<PostsPage/> , loader:({params:{id}})=>usersService.getPostByUser(id)
                            }
                        ]
                    }
                ]
            },
            {
                path:'posts',element:<PostPage/>,children:[
                    {
                        path:':postId',element: <PostDetailsPage/>, loader:({params:{postId}})=>postsService.getById(postId)
                    }
                ]
            }
        ]
    }
])

export {router}