// se usa use en el nombre por convención para que se epsa que es un hook
// a diferencia de un FunctionalComponent el Hook no regresa html
//Los hooks también pueden tener estados

import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) =>{
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect( ()=> { // los efectos no pueden ser Async

        getGifs(category)
             .then(imgs =>{
                setState({
                    data: imgs,
                    loading: false
                });
             })
     }, [category]) // Se usa el useEffect y se agrega el - ,[] - para que sólo haga el llamado al api una vez
                    // Se puso [category] por un warning que dice que si la dependencia cambia pueda correr de nuevo

    return state; // El state sería data y loading y state es un nombre que podemos cambiar, ejemplo a objeto

}