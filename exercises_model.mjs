import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);


// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the exercise Schemea
 */
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }
});

const userSchema = mongoose.Schema({
    email: { type: String, required: [true, "Email Required"], unique: [true, "Email Already in Use"] },
    password: { type: String, required: [true, "Password Required"] }
});

/**
 * Compile the model from the exercise Schema
 */
const Exercise = mongoose.model("Exercise", exerciseSchema);


// create exercise function
const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date});
    return exercise.save();
};

// find exercise by input id
const findExerciseById = async (_id) => {
    const query = Exercise.findById({ _id: _id });
    return query.exec();
};

// find all exercises meeting the input filter conditions
const findExercises = async (filter) => {
    const query = Exercise.find(filter);
    return query.exec();
};

// call updateOne method to modify an exercise
const replaceExercise = async (_id, name, reps, weight, unit, date) => {
    const result = await Exercise.updateOne({ _id: _id }, { name: name, reps: reps, weight: weight, unit: unit, date: date });
    return result;
};

// call deleteOne method to delete an exercise matching the input id
const deleteById = async (_id) => {
    const result = await Exercise.deleteOne({ _id: _id })
    return result.deletedCount;
};


export { createExercise, findExerciseById, findExercises, replaceExercise, deleteById }