import React from 'react';
import { MdDelete } from 'react-icons/md';
 
function ExerciseType({ exerciseType, onDelete }) {
    return (
        <tr>
            <td>{exerciseType.name}</td>
            <td>< MdDelete onClick={() => onDelete(exerciseType._id)} /></td>
        </tr>
    );
}

export default ExerciseType;