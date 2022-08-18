import React from 'react';

const About = () => {
    return (
        <div className="App-content">
            <p>
                Hello there! This is a Single Page Application (SPA) utilizing the powerful MERN stack.
            </p>
            <ol>
                <li><b>M</b>ongoDB is used as the database.</li>
                <li><b>E</b>xpress is used as the web application framework.</li>
                <li><b>R</b>est is used as the frontend client-side Javascript framework</li>
                <li><b>N</b>ode is used as the Javascript web server.</li>
            </ol>
            <p>
                On the <b>"Add Journal Entry"</b> page, you can add a new exercise record into your exercise journal,
                and on the <b>"Add New Exercise Type"</b> page you can add a new exercise type.
            </p>

        </div>
    );
};

export default About;

