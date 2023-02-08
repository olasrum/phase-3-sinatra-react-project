import React, {useState} from "react";
import EditExercise from "./EditExercise";

function Exercise({ category, name, note, id, onDeleteExercise, onUpdateExercise}) {
    const [isEditing, setIsEditing] = useState(false);
   
    function handleDeleteClick() {
        fetch(`http://localhost:9292/exercises/${id}`, {
            method: "DELETE"
        });
        onDeleteExercise(id)}

    function handleUpdateExercise(updatedExercise) {
        setIsEditing(false);
        onUpdateExercise(updatedExercise);
        }

    return (
        <div className="exercise">
            <div className="exercise-cat">{category}</div>
            <div className="exercise-name">{name}</div>
            {isEditing ? (
            <EditExercise
            id={id}
            note={note}
            onUpdateExercise={handleUpdateExercise}
             />
            ) : (
            <div className="exercise-note">Note: {note}</div>
            )}
            <button 
            type="button" 
            onClick={() => setIsEditing((isEditing) => !isEditing)}
            className="edit-button" 
            >✏️</button>
            <button 
            className="delete-button" 
            onClick={handleDeleteClick}
            >🗑</button>
        </div>
    )
}

export default Exercise;