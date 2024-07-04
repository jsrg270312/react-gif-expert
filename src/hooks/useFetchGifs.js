import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs= (category) => {
    console.log('UsefetchGifts - hook')

    const [images, setImages] = useState( [] );
    const [isLoading, setIsLoading] = useState( true );
    
    const getCategories = async () =>{
        console.log('UsefetchGifts - hook antes del await fetch')
        const newImages = await getGifs( category )
        setImages( newImages )
        setIsLoading( false )
        console.log('UsefetchGifts - hook despues del await fetch')
    }

    useEffect( () => {
        console.log('se ejecuta el use effect')
        getCategories();
    }, [] )
    return {
        images,
        isLoading
    }
}