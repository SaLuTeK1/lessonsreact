import {useEffect} from "react";

const Car = ({car,setCarForUpdate,deleteFunction}) => {
    const {id,brand,price,year}=car;

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={()=>deleteFunction(car)}>delete</button>
            <br/>
        </div>

    );
};

export {Car};