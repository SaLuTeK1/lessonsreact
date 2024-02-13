import Joi from "joi";

const carValidator = Joi.object({
    brand:Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        'string.pattern.base':'Невірний формат запису! Лише букви!'
    }),
    price:Joi.number().min(0).max(1_000_000).required().messages({
        'number.min':'Мінімальна ціна 0',
        'number.max':'Мінімальна ціна 1000000'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min':'Мінімальний рік 1990',
        'number.max':'Мінімальний рік - поточний'
    })
})

export {carValidator}