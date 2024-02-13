import {useEffect, useState} from "react";
import {carService} from "../../services/carService";
import {Cars} from "../Cars/Cars";
import {CarsForm} from "../CarsForm/CarsForm";

const CarsContainer = () => {
    const [cars,setCars]= useState([]);
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)
    const [carForDelete, setCarForDelete] = useState(null)
    
    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, [trigger]);

    const deleteFunction = async (car)=>{
        setCarForDelete(car)
        await carService.delete(car.id)
        setTrigger(prev=>!prev)
    }

    return (
        <div>
            <CarsForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate} setCarForDelete={setCarForDelete} carForDelete={carForDelete}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setCarForDelete={setCarForDelete} deleteFunction={deleteFunction} />
        </div>
    );
};

export {CarsContainer};