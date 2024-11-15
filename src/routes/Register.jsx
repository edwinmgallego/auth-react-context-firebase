import React,{useContext,useState} from 'react'
import  {UserContext}  from '../context/UserProvider'
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import { formValidate } from '../utils/formValidate';
import { erroresFirebase } from '../utils/erroresFirebase';


import FromInput from '../components/FormInput';
import FormError from '../components/FormError';
import Title from '../components/Title';
import Button from '../components/Button';

const Register = () => {
   // const [email,setEmail]= useState("emgallego@uao.edu.co");
   // const [password,setPasword]= useState("q1234567890");
    const {registerUser} =useContext(UserContext);
  const navegate = useNavigate();
  const {register,handleSubmit,formState:{errors},getValues,}=useForm();
  const {required, patternEmail,minLength,validateTrim,validateEquals}= formValidate();

 const  onSubmmit=async({email,password})=>{
    console.log("procesando formulario--->_ ",email,password);
    try {
        await registerUser(email,password)
        console.log("procesando formulario--->_ ",email,password);
        
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
    <Title text="Register"/>
    <form  onSubmit={handleSubmit(onSubmmit)}>
        <FormInput 
        type="email" 
        name="" 
        id="" 
        placeholder='email'
        
        {...register(
            "email",{
             required,
             pattern: patternEmail,
            }
        )}
        label="Ingresa tu correo"
        error ={errors.email}
       >
       <FormError error= {errors.email}/>
       </FormInput>

        
        <FormInput 
        type="password" 
        name="" 
        id=""
        placeholder='password' 
        {...register(
            "password",{
                required,
                minLength,
                validate: validateTrim,
            }
        )}
        label="ingresa tu password"
        error= {errors.password}
       >
<FormError error= {errors.password}/>

        </FormInput>


<FromInput 
        type="password" 
        name="" 
        id=""
        placeholder='password' 
        {...register(
            "password2",{
                
                validate:validateEquals(getValues("password2"))

            }
        )}
        label ="repite contraseña"
        error ={errors.password2}
       >
        <FormError error= {errors.password}/>
       </FromInput>
      
        <button type="submit">Enviar</button>
    </form>
    </>
    
  )
}

export default Register