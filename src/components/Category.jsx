import { useState } from "react";
export const AddCategory = ({onNewCategory}) => {
    console.log('Category')
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        //setCategories(setAllCategories)
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    const setAllCategories = (categories) =>{
        console.log(categories)
        return [inputValue, ... categories];
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Search gifts"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
}