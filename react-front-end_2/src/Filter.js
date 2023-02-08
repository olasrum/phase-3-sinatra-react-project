import React from "react";


function Filter({ exerciseCategories, selectedCategory, onCategorySelected }) {
   
   
    const categoryButtons = exerciseCategories.map((category) => {
        const className = (category === selectedCategory ? "selected" : null)
        return ( <button
            key={category}
            onClick={() => (onCategorySelected(category))}
            className={className}
            >
            {category}
            </button>)
            })

    return (
    <div> 
    {categoryButtons}
    </div>   
    )
}

export default Filter;