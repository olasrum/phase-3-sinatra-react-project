import React from "react";
import Exercise from "./Exercise";
import Filter from "./Filter"
import Form from "./Form";

function ExerciseList ({onDeleteExercise, exercises, categoryNames, onNewExerciseFormSubmit,selectedCategory, onCategorySelected, onUpdateExercise}) {

    const exerciseElements = exercises.map((exercise) => {
        const categoryId = exercise.category_id
        return (
            <Exercise
                key={exercise.id}
                name={exercise.name}
                note={exercise.note}
                id={exercise.id}
                className={exercise}
                category={categoryNames[categoryId]}
                onDeleteExercise={onDeleteExercise}
                onUpdateExercise={onUpdateExercise}  
            />
        )
    })

    return (
        <div>
            <Form 
            exerciseCategories={categoryNames} 
            onNewExerciseFormSubmit={onNewExerciseFormSubmit}
             />
            <br></br>
            <Filter
            exerciseCategories={categoryNames} 
            selectedCategory={selectedCategory} 
            onCategorySelected={onCategorySelected}/>
            <div>{exerciseElements}</div>
        </div>
        )
}

export default ExerciseList