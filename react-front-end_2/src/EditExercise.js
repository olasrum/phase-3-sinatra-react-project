import React, { useState } from "react";

function EditExercise({id, note, onUpdateExercise}) {
  const [exerciseNote, setExerciseNote] = useState(note)

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/exercises/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        note: exerciseNote
      }),
    })
      .then((r) => r.json())
      .then((updatedExercise) => onUpdateExercise(updatedExercise));
  }

  return (
    <form className="edit-exercise" onSubmit={handleFormSubmit}>
      <input
        id="edit-note"
        type="text"
        name="note"
        autoComplete="off"
        value={exerciseNote}
        onChange={(e) => setExerciseNote(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditExercise;