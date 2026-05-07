import {create} from "zustand";

export const useRecetasGuardadasStore= create((set)=>({
    recetas:[],

    agregarReceta: (nuevaReceta)=> set((state)=>{
        const existe= state.recetas.includes(nuevaReceta);

        if(existe){
            return {
                recetas: [...state.recetas]
            }
        }

        return {
            recetas: [...state.recetas, nuevaReceta]
        }
    }),

    eliminarReceta: (recetaAEliminar)=> set((state)=>({
        recetas: state.recetas.filter((receta)=> receta.idMeal !== recetaAEliminar.idMeal)
    })),

    eliminarTodas: ()=> set({recetas: []})

}))