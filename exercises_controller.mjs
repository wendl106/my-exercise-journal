import 'dotenv/config';
import * as exercises from './exercises_model.mjs';
import express from 'express';
import validator from 'express-validator';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import * as auth from './authorization.mjs';

const app = express();

app.use(cors());
app.use(express.json());

const { body, validationResult } = validator

app.get('/greetings', auth, (req, res) => {
    res.status(201).json({ Message: "Hello There"})
})

app.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then(hashedPassword => {
            exercises.createUser(req.body.email, hashedPassword)
            .then(user => {
                res.status(201).json(user);
            })
            .catch(error => {
                console.error(error);
                res.status(500).json({ Error: 'Internal server error' });
            })
        })
        .catch(error => {
            res.status(500).json({ Error: 'Internal server error' });
        });
})

app.post('/login', (req, res) => {
    exercises.findUserByEmail(req.body.email)
        .then(user => {
            if (user !== null) {
                bcrypt.compare(req.body.password, user.password)
                    .then(compareResult => {
                        if (!compareResult) {
                            res.status(400).json({ Error: 'Password is incorrect' });
                        }
                        const token = jsonwebtoken.sign(
                            {
                              userId: user._id,
                              userEmail: user.email,
                            },
                            "RANDOM-TOKEN",
                            { expiresIn: "24h" }
                        );
                        res.status(200).send({
                            message: "Login Success",
                            email: user.email,
                            token,
                          })
                    })
                    .catch(error => {
                        res.status(500).json({ Error: 'Internal server error' });
                    })
            } else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            res.status(500).json({ Error: 'Internal server error' });
        });
})


/**
 * Create a new exercise
 * express validator is used to validate the request
 */
 app.post(
    '/exercises',
    body('name').notEmpty(),
    body('reps').notEmpty().isInt({ min: 1 }),
    body('weight').notEmpty().isInt({ min: 1 }),
    body('unit').notEmpty().isIn(['lbs', 'kgs']),
    body('date').notEmpty().matches(/^\d\d-\d\d-\d\d$/),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ Error: "Invalid request" });
        }
        exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
            .then(exercise => {
                res.status(201).json(exercise);
            })
            .catch(error => {
                console.error(error);
                res.status(500).json({ Error: 'Internal server error' });
            })
    }
);

/**
 * Retrive the exercise
 */
app.get('/exercises/:_id', (req, res) => {
    const exerciseId = req.params._id;
    exercises.findExerciseById(exerciseId)
        .then(exercise => { 
            if (exercise !== null) {
                res.status(200).json(exercise);
            } else {
                res.status(404).json({ Error: 'Not found' });
            }         
         })
        .catch(error => {
            res.status(500).json({ Error: 'Internal server error' });
        });
});

/**
 * Retrieve exercises
 */
app.get('/exercises', (req, res) => {
    exercises.findExercises({}, '', 0)
        .then(exercises => {
            res.status(200).send(exercises);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send({ Error: 'Internal server error' });
        });

});

/**
 * Update the exercise whose id is provided in the path parameter and set
 * its parameters to the values provided in the body after validating with express validator
 */
app.put(
    '/exercises/:_id',
    body('name').notEmpty(),
    body('reps').notEmpty().isInt({ min: 1 }),
    body('weight').notEmpty().isInt({ min: 1 }),
    body('unit').notEmpty().isIn(['lbs', 'kgs']),
    body('date').notEmpty().matches(/^\d\d-\d\d-\d\d$/),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ Error: "Invalid request" });
        }

        exercises.replaceExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
            .then( replaceResult => {
                if (replaceResult.matchedCount === 1) {
                    res.status(200).json({ _id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date })
                } else {
                    res.status(404).json({ Error: "Not found" })
                }
            })
            .catch(error => {
                res.status(500).json({ Error: "Internal server error" })
            })
    }
);

/**
 * Delete the exercise with its id provided in the query parameters
 */
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Internal server error' });
        })
});


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT}...`);
});