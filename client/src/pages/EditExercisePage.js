import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ExerciseTypeSelect from '../components/ExerciseTypeSelect';

export const EditExercisePage = ({ exerciseToEdit }) => {

    const [exerciseType, setExerciseType] = useState([]);

    const [name, setName] = useState(exerciseToEdit.name);
    const [sets, setSets] = useState(exerciseToEdit.sets);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);
    const [comment, setComment] = useState(exerciseToEdit.comment);

    const navigate = useNavigate();

    const editExercise = async () => {
        const editedExercise = {name, sets, reps, weight, unit, date, comment}
        const response = await fetch(`https://myexercisejournal.herokuapp.com/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status === 200) {
            alert("Successfully edited exercise!");
        } else {
            alert("The update failed :(")
        };
        navigate('/')
    };
    
    const loadExerciseTypes = async () => {
        const response = await fetch('https://myexercisejournal.herokuapp.com/exercise-types');
        const data = await response.json();
        setExerciseType(data)
    }

    useEffect(() => {
        loadExerciseTypes();
    }, []);

    const Add = exerciseType.map(Add => Add
        )

    const handleChange = (event) => {
        setName(event.target.value);
        };

    return (
        <div>
            <h1>Edit Exercise</h1>
            < select
                onChange={e => handleChange(e)}
                >
                <option value={name}>Optional Change of Exercise Name</option>
                {
                    Add.map((exerciseType, i) => <ExerciseTypeSelect exerciseType={exerciseType} key={i} />)
                }    
            </select >
            <input
                type="number"
                min="1" step="1"
                value={reps}
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                min="1" step="1"
                value={sets}
                onChange={e => setSets(e.target.value)} />
            <input
                type="number"
                min="1" step="1"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select
                defaultValue={unit}
                onChange={e => setUnit(e.target.value)}>
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
            </select>
            <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <input
                type="text"
                value={comment}
                onChange={e => setComment(e.target.value)} />
            <button
                onClick={editExercise}
            >Finalize Edit</button>
        </div>
    );
}

export default EditExercisePage;