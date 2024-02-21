import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {ContextProvider} from "../hoc";

const MainLayout = () => {
    return (
        <div>
            <ContextProvider>
                <Header/>
            </ContextProvider>
            <Outlet/>
        </div>
    );
};

export {MainLayout};