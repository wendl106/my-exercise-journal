import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ExerciseTypeSelect from '../components/ExerciseTypeSelect';

export const AddExercisePage = () => {

    const [exerciseType, setExerciseType] = useState([]);

    const [name, setName] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');
    const [comment, setComment] = useState('');

    const navigate = useNavigate();

    const addExercise = async () => {
        const newExercise = {name, sets, reps, weight, unit, date, comment}
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status === 201) {
            alert("Successfully added exercise!");
        } else {
            alert("Adding exercise failed :(")
        };
        navigate('/')
    };

    const loadExerciseTypes = async () => {
        const response = await fetch('/exercise-types');
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
            <h1>What Exercise Did You Do?</h1>
            <p>Remember, if your exercise type is not available in the dropdown menu you can add it!</p>

            < select
                onChange={e => handleChange(e)}
                >
                <option value="" disabled>Exercise</option>
                {
                    Add.map((exerciseType, i) => <ExerciseTypeSelect exerciseType={exerciseType} key={i} />)
                }
                
            </select >
            <input
                type="number"
                min="1" step="1"
                value={sets}
                placeholder="Enter sets here"
                onChange={e => setSets(e.target.value)} />
            <input
                type="number"
                min="1" step="1"
                value={reps}
                placeholder="Enter reps here"
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                min="1" step="1"
                placeholder="Enter weight here"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select
                onChange={e => setUnit(e.target.value)}>
                <option value="" disabled>Units</option>
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
                placeholder="Enter any comment here"
                onChange={e => setComment(e.target.value)} />
            <button
                onClick={addExercise}
            >Add</button>
        </div>
    );
}

export default AddExercisePage;