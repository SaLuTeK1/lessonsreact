// http://owu.linkpc.net/carsAPI/v1/doc
// Реалізувати створення, видалення та оновлення машин використовуючи Redux ToolKit

import {CarForm, Cars} from "../components";

const CarsPage = () => {

    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};