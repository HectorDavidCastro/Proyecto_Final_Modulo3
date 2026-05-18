import React from 'react'
import { useAuth } from "../hooks/useAuth"
import { useForm } from "react-hook-form"
import styles from "../css/LogIn.module.css"


export const LogIn = () => {
    const{usuario, logIn, logOut}=useAuth();
    const{register, handleSubmit, formState: {errors}, watch}= useForm({});

    const onSubmit=(e)=>{
        e.preventDefault;
    }
    
    const contraseña= watch("contraseña");
    const nombreUsuario= watch("nombre");
  return (
    <div className={styles.container}>
        { (!usuario) ?
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Nombre de usuario</label>
              <input className={styles.input} type="text" {...register("nombre", {required:"Debes completar este campo"})} />
              {errors.nombre && <p className={styles.error}>{errors.nombre.message}</p>}  
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Correo electrónico</label>
              <input className={styles.input} type="email" {...register("email", {required:"Debes completar este campo",
                pattern:{value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message:"El formato del email no es valido" }
              })} />
              {errors.email && <p className={styles.error}>{errors.email.message}</p>}  
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Contraseña</label>
              <input className={styles.input} type="password" {...register("contraseña", {required:"Debes completar este campo",
                pattern:{value:/\d/, message:"La contraseña debe contener como minimo un digito"},
                minLength:{value:5, message:"La contraseña debe tener como minimo 5 caracteres"}
              })} />
              {errors.contraseña && <p className={styles.error}>{errors.contraseña.message}</p>}  
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Confirmar contraseña</label>
              <input className={styles.input} type="password" {...register("confirmarContraseña", {required: "Debes completar este campo",
                validate: (value)=> value === contraseña || "Las contraseñas no coinciden"
              })} />
              {errors.confirmarContraseña && <p className={styles.error}>{errors.confirmarContraseña.message}</p>}  
            </div>
            <button className={styles.boton} type='submit'  onClick={()=>logIn(nombreUsuario)}>Registrarse</button>  
          </form>        
      </div>
         : 
         <div className={styles.formContainer}>
              <h2 className={styles.text}>Usted ya se encuetra registrado</h2>
              <h3 className={styles.text}>su usuario es : {usuario}</h3>
              <h3 className={styles.text}>¿Quiere cerrar la sesion?</h3>
            <button className={styles.boton} onClick={logOut}>Cerrar sesion</button>
        </div>
         }
    </div>
  )
}
