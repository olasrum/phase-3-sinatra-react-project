import React, {useState} from "react";

function Form({exerciseCategories, onNewExerciseFormSubmit}) {
    const [newExerciseName, setNewExerciseName] = useState("");
    const [newExerciseNote, setNewExerciseNote] = useState("");
    const [newExerciseCategoryId, setNewExerciseCategoryId] = useState("");

    const categoriesWithoutAll = exerciseCategories.filter((category) => (category !== "All"))
    const options = categoriesWithoutAll.map((category) => {
        return (
            <option key={category} value={category}>{category}</option>
          )
    })

    function handleSelectedCategory(event) {
        setNewExerciseCategoryId(exerciseCategories.indexOf(event.target.value))
    }

    function handleNameChange(event) {
        setNewExerciseName(event.target.value)
    }

    function handleNoteChange(event) {
        setNewExerciseNote(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()

        fetch("http://localhost:9292/exercises", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: newExerciseName,
              note: newExerciseNote,
              category_id: newExerciseCategoryId,
            }),
          })
            .then((r) => r.json())
            .then((newExercise) => {
                onNewExerciseFormSubmit(newExercise);
                setNewExerciseName("");
                setNewExerciseNote("");
                setNewExerciseCategoryId("");
            });
           
    }
   
    return (
        <div>
        <form onSubmit={handleSubmit} className="new-exercise-form">
            <label for="form-name">
                Name: 
                <input 
                id="form-name"
                type="text" 
                onChange={handleNameChange} 
                value={newExerciseName}>
                </input>
            </label>
            <label for="form-note">
                Note:
                <input 
                id="form-note"
                type="text"
                onChange={handleNoteChange}
                value={newExerciseNote}>
                </input>
            </label>
            <label> 
                Category:
                <select id="form-category" onChange={handleSelectedCategory}>
                    <option selected disabled hidden>Choose a Category</option>
                    {options}
                </select>
            </label>
            <input id="form-submit" type="submit" value="Add Exercise"></input>
        </form>
        </div>
    )
    
}

export default Form;