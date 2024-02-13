import {Car} from "../Car/Car";

const Cars = ({cars,setCarForUpdate,deleteFunction}) => {

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} deleteFunction={deleteFunction}/>)}
        </div>
    );
};

export {Cars};