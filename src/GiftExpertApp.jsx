import React, { useState } from "react"
import { AddCategory, GifGrid} from './components'
export const GiftExpertApp = () => {
    console.log('GiftExperty')
    const [categories, setCategories] = useState(['goku'])

    const onAddCategory = (newCategory) => {
        if(existInCategories(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    const existInCategories = (newCategory) => {
        return categories.includes(newCategory)
    }

    return (
        <>
        
            <h1>Gif Expert app</h1>
            <AddCategory 
                onNewCategory={onAddCategory}
            />

            { 
                categories.map( ( category ) => (
                <GifGrid
                    key={category} 
                    category={category}
                />                    
                ))
            }
        </>
    )
}