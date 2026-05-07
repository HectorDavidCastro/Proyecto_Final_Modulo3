import {useState} from "react"
export const useAuth= ()=>{
    const[usuario, setUsuario]=useState(null);

    const logIn=(nombre)=>{
        setUsuario(nombre)
    };
    const logOut=()=>{
        setUsuario(null);
    }

return { usuario, logIn, logOut}
}