import React from 'react';
import {CarsContainer} from "./components/CarsContainer/CarsContainer";

// http://owu.linkpc.net/carsAPI/v1/doc
//     Реалізувати створення, видалення та оновлення машин
const App = () => {
    return (
        <div>
            <CarsContainer/>
        </div>
    );
};

export {App};