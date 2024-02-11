import {useForm} from "react-hook-form";
import {userService} from "../../services/userService";

const UserForm = ({setUsers}) => {
   const {reset,register,handleSubmit}= useForm();
   const save = (user)=>{
       userService.create(user).then(({data})=> setUsers(prev=>[...prev,data]))
   }
   return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={"name"} {...register('name')} />
            <input type="text" placeholder={"username"} {...register('username')} />
            <input type="text" placeholder={"email"} {...register('email')} />
            <button>Send</button>
        </form>
    );
};

export {UserForm};