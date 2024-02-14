import {createBrowserRouter, Navigate} from "react-router-dom";
import {AlbumsPage} from "./pages/AlbumsPage";
import {MainLayout} from "./layouts/MainLayout";
import {TodosPage} from "./pages/TodosPage";
import {CommentsPage} from "./pages/CommentsPage";
import {ErrorPage} from "./pages/ErrorPage";
import {HomePage} from "./pages/HomePage";
import {PostsPage} from "./pages/PostsPage";

const router = createBrowserRouter([
    {
        path:'',element:<MainLayout/>,errorElement:<ErrorPage/>,children:[
            {index:true,element:<Navigate to={"/home"}/>},
            {
                path:'albums',element:<AlbumsPage/>
            },
            {
                path:'todos',element:<TodosPage/>
            },
            {
                path:'comments',element:<CommentsPage/>,children:[
                    {
                        path:'posts',element:<PostsPage/>
                    }
                ]
            },
            {
                path:'home',element:<HomePage/>
            }
            ]
    }
])

export{router}