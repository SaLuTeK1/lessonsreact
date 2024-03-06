import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {carService} from "../../../sevices";
import {carActions} from "../../../store";



const Cars = () => {
    const dispatch = useDispatch();
    const {cars, trigger} = useSelector(state => state.cars);

    
    useEffect(() => {
        carService.getAll().then(({data})=>dispatch(carActions.setResponse(data)))
    }, [dispatch,trigger]);

    
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
}

export {Cars};