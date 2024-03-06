import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../../store";
import {carService} from "../../../sevices";


const CarForm = () => {
    const {reset, handleSubmit, register, setValue} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);
    const save = async (car)=>{
        await carService.create(car);
        dispatch(carActions.reloadPage())
        reset();
    }
    const update = async (car)=>{
        await carService.updateById(carForUpdate.id,car)
        dispatch(carActions.setCarForUpdate(null))
        dispatch(carActions.reloadPage())
        reset();
    }

    
    useEffect(() => {
        if(carForUpdate){
            setValue('brand',carForUpdate.brand)
            setValue('year',carForUpdate.year)
            setValue('price',carForUpdate.price)
        }
    }, [carForUpdate,setValue]);


    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type='text' placeholder='brand' {...register('brand')}/>
            <input type='text' placeholder='year'  {...register('year',{valueAsNumber:true}) }/>
            <input type='text' placeholder='price' {...register('price',{valueAsNumber:true})}/>
            <button>{carForUpdate?'update':'save'}</button>
        </form>
    );
};

export {CarForm};