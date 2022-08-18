import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ExerciseTypeList from '../components/ExerciseTypeList';

export const AddExerciseTypePage = () => {

    const [name, setName] = useState('');
    const [exerciseTypes, setExerciseTypes] = useState([]);

    const navigate = useNavigate();

    const loadExerciseTypes = async () => {
        const response = await fetch('/exercise-types');
        const data = await response.json();
        setExerciseTypes(data)
    }

    const addExerciseType = async () => {
        const newExerciseType = {name}
        const response = await fetch('/exercise-types', {
            method: 'POST',
            body: JSON.stringify(newExerciseType),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status === 201) {
            alert("Successfully added exercise!");
            loadExerciseTypes();
        } else {
            alert("Adding exercise failed :(")
        };
        navigate('/add-exercise-type')
    };

    const onDelete = async _id => {
        const response = await fetch(`/exercise-types/${_id}`, { method: "DELETE" });
        // HTTP status of 204 is successful deletion
        if (response.status === 204) {
            const newExerciseTypes = exerciseTypes.filter(e => e._id !== _id);
            setExerciseTypes(newExerciseTypes);
        } else {
            console.error(`Failed to delete exercise type id ${_id}, status code = ${response.status}`);
        }
    };

    useEffect(() => {
        loadExerciseTypes();
    }, []);

    return (
        <div>
            <h1>Add New Exercise Type</h1>
            <input
                type="text"
                required
                placeholder="Enter exercise name"
                value={name}
                onChange={e => setName(e.target.value)} />
            <button
                onClick={addExerciseType}
            >Add</button>

            <h2>List of Exercise Types</h2>
            <ExerciseTypeList exerciseTypes={exerciseTypes} onDelete={onDelete}></ExerciseTypeList>
        </div>
    );
}

export default AddExerciseTypePage;