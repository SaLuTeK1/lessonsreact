import {useForm} from "react-hook-form";
import {carService} from "../../services/carService";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";
import {useEffect} from "react";

const CarsForm = ({setTrigger,carForUpdate,setCarForUpdate,carForDelete,setCarForDelete}) => {

    const {reset,register,handleSubmit,formState:{isValid,errors},setValue} =useForm({
        mode:'all',
        resolver:joiResolver(carValidator)
    })

    const save = async (car) =>{
         if(carForUpdate){
             await carService.updateById(carForUpdate.id,car)
             setCarForUpdate(null);
             setTrigger(prev=>!prev)
         }else{
             await carService.create(car);
             setTrigger(prev=>!prev)
         }
        reset();
    }
    useEffect(() => {
        if (carForUpdate){
            setValue('brand',carForUpdate.brand,{shouldValidate:true})
            setValue('year',carForUpdate.year,{shouldValidate:true})
            setValue('price',carForUpdate.price,{shouldValidate:true})
            console.log(carForUpdate.id)
        }
    }, [carForUpdate]);

    return (
       <form onSubmit={handleSubmit(save)}>
           <input type="text" placeholder="Brand" {...register('brand',)}/>
           <input type="text" placeholder="Year" {...register('year',{valueAsNumber:true})}/>
           <input type="text" placeholder="Price" {...register('price',{valueAsNumber:true})}/>
           <button disabled={!isValid}>Save</button>
           {errors.brand &&<div>{errors.brand.message}</div>}
           {errors.price &&<div>{errors.price.message}</div>}
           {errors.year &&<div>{errors.year.message}</div>}
       </form>
    );
};

export {CarsForm};