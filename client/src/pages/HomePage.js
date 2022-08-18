import React from 'react';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage({ setExerciseToEdit }) {
    const [exercises, setExercises] = useState([]);

    const navigate = useNavigate();

    const loadExercises = async () => {
        const response = await fetch('https://myexercisejournal.herokuapp.com/exercises');
        const data = await response.json();
        setExercises(data)
    }

    const onDelete = async _id => {
        const response = await fetch(`https://myexercisejournal.herokuapp.com/exercises/${_id}`, { method: "DELETE" });
        // HTTP status of 204 is successful deletion
        if (response.status === 204) {
            const newExercises = exercises.filter(e => e._id !== _id);
            setExercises(newExercises);
        } else {
            console.error(`Failed to delete exercise id ${_id}, status code = ${response.status}`);
        }
    };

    const onEdit = exercise => {
        setExerciseToEdit(exercise);
        navigate('/edit-exercise');
    }

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }


    // 2nd argument of useEffect is empty array so that loadExercises is called on page render
    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
            <h2>Exercise Journal</h2>
            <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseList>
            <button
                onClick={logout}
            >Logout</button>
        </>
    );
}

export default HomePage;