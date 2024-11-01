import React,{useContext,useState} from 'react'
import { UserContext } from '../context/UserProvider'
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'

const Register = () => {
   // const [email,setEmail]= useState("emgallego@uao.edu.co");
   // const [password,setPasword]= useState("q1234567890");
    const {registerUser} =useContext(UserContext);
  const navegate = useNavigate();
  const {register,handleSubmit,formState:{errors},getValues,}=useForm();

 const  onSubmmit=async({email,password})=>{
    console.log("procesando formulario--->_ ",email,password);
    try {
        await registerUser(email,password)
        
    } catch (error) {
        console.log(error.code);
        
    }
 }

   /* const handleSubmit=async(e)=>{
        e.preventDefault();//previene recargar  todo el sitio
        console.log("enviando datos: ",email," ",password)
        try {
            await registerUser(email,password)
            
        } catch (error) {
            console.log(error.code);
            
        }



    }*/

  return (

    <>
    <div>Register</div>
    <form  onSubmit={handleSubmit(onSubmmit)}>
        <input 
        type="email" 
        name="" 
        id="" 
        placeholder='email'
        
        {...register(
            "email",{
             required:{
                value: true,
                message:" el campo es obligatorio"
             },
             pattern: {
                value:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message:"formato de email incorrecto"
             }
            }
        )}
        /*value={email} 
        onChange={(e)=>setEmail(e.target.value)}*//>

        {errors.email && <p>{errors.email.message}</p>}
        <input 
        type="password" 
        name="" 
        id=""
        placeholder='password' 
        {...register(
            "password",{
                required:{
                    value: true,
                    message:"la contraseña es obligatoria"
                },
                minLength:{
                    value: 8,
                    message:"la contraseña debe tener almenos 8 caracteres"
                }
            }
        )}
       /* value={password} 
        onChange={(e)=>setPasword(e.target.value)} *//>


<input 
        type="password" 
        name="" 
        id=""
        placeholder='password' 
        {...register(
            "password2",{
                required:"la contraseña es obligatoria",
                validate:{
                    equals:(v)=>{v=== getValues("password")||"no coincide las contraseñas"}
                },

            }
        )}
       /* value={password} 
        onChange={(e)=>setPasword(e.target.value)} *//>
        {errors.password2 && <p>{errors.password2.message}</p>}
        <button type="submit">Enviar</button>
    </form>
    </>
    
  )
}

export default Register