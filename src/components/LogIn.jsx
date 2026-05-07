import React from 'react'
import { useAuth } from "../hooks/useAuth"
import { useForm } from "react-hook-form"


export const Login = () => {
    const{usuario, logIn, logOut}=useAuth();
    const{register, handleSubmit, formState: {errors}, watch}= useForm({});

    const onSubmit=(e)=>{
        e.preventDefault;
    }
    
    const contraseña= watch("contraseña");
    const nombreUsuario= watch("nombre");
  return (
    <div>
        { (!usuario) ?
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Nombre de usuario</label>
              <input  type="text" {...register("nombre", {required:"Debes completar este campo"})} />
              {errors.nombre && <p>{errors.nombre.message}</p>}  
            </div>
            <div>
              <label>Correo elctronico</label>
              <input type="email" {...register("email", {required:"Debes completar este campo",
                pattern:{value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message:"El formato del email no es valido" }
              })} />
              {errors.email && <p>{errors.email.message}</p>}  
            </div>
            <div >
              <label>Contraseña</label>
              <input type="password" {...register("contraseña", {required:"Debes completar este campo",
                pattern:{value:/\d/, message:"La contraseña debe contener como minimo un digito"},
                minLength:{value:5, message:"La contraseña debe tener como minimo 5 caracteres"}
              })} />
              {errors.contraseña && <p>{errors.contraseña.message}</p>}  
            </div>
            <div>
              <label>Confirmar contraseña</label>
              <input type="password" {...register("confirmarContraseña", {required: "Debes completar este campo",
                validate: (value)=> value === contraseña || "Las contraseñas no coinciden"
              })} />
              {errors.confirmarContraseña && <p>{errors.confirmarContraseña.message}</p>}  
            </div>
            <button type='submit'  onClick={()=>logIn(nombreUsuario)}>Registrarse</button>  
          </form>        
      </div>
         : 
         <div>
              <h2>Usted ya se encuetra registrado</h2>
              <h3 >su usuario es : {usuario}</h3>
              <h3 >¿Quiere cerrar la sesion?</h3>
            <button  onClick={logOut}>Cerrar sesion</button>
        </div>
         }
    </div>
  )
}
