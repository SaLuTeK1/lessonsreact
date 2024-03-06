import {useDispatch} from "react-redux";

import {carActions} from "../../../store";
import {carService} from "../../../sevices";


const Car = ({car}) => {
    const dispatch = useDispatch();
    const {id, brand, year, price} = car;

    const deleteFunction = async ()=>{
        await carService.delete(id)
        dispatch(carActions.reloadPage())
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>year:{year}</div>
            <div>price:{price}</div>
            <button onClick={deleteFunction}>delete</button>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>update</button>
            <hr/>
        </div>
    );
};

export {Car};