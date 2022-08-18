import React from 'react';
import { GrEdit } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
 
function Exercise({ exercise, onEdit, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.sets}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td>{exercise.comment}</td>
            <td>< GrEdit onClick={() => onEdit(exercise)} /></td>
            <td>< MdDelete onClick={() => onDelete(exercise._id)} /></td>
        </tr>
    );
}

export default Exercise;