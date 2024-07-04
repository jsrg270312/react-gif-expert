import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid =  ({category}) => {
    console.log('GifGrid llga con la categoria =>', category)
    const { images, isLoading } = useFetchGifs(category)
    console.log(isLoading, images, 'Esto es lo que regresa')

    return(
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2> cargando ...</h2>)
            }
            
            <div className="card-grid">
            { images.map(( image ) => (
                    <GifItem 
                        key={ image.id } 
                        { ...image }
                    />
                ))
            }
            </div>
            
        </>
    );
} 