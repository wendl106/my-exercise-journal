import React from 'react';
 
function ExerciseTypeSelect({ exerciseType }) {
    return (
        <option key={exerciseType.name} value={exerciseType.name}>{exerciseType.name}</option>
    );
}

export default ExerciseTypeSelect;