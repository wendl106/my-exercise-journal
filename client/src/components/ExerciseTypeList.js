import React from 'react';
import ExerciseType from './ExerciseType';

function ExerciseList({ exerciseTypes, onDelete }) {
    return (
        <table id="exercise-types">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exerciseTypes.map((exerciseType, i) => <ExerciseType exerciseType={exerciseType}
                    onDelete={onDelete}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default ExerciseList;