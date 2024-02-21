import {createContext,useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const Context = createContext(null);
const ContextProvider = ({children}) => {

    const [episodeName, setEpisodeName] = useState(null)


    const {state} = useLocation();
    useEffect(() => {
        if(state?.episode){
            setEpisodeName(state.episode)
        }else{
            setEpisodeName(null);
        }
    }, [state]);

    return (
        <div>
            <Context.Provider value={episodeName}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {ContextProvider,Context};