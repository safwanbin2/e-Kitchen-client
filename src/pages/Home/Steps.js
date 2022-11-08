import React from 'react';

const Steps = () => {
    return (
        <div className='my-12'>
            <h2 className='text-2xl font-semibold mx-4'>Beginner guide:</h2>
            <ul className="steps steps-vertical mx-2">
            <li className="step step-primary">
                <h2>Go take a look at the foods and check what others people said about the food.</h2>
            </li>
            <li className="step step-primary"><h2>After selecting food, contact our delivery boy for tracking your order</h2></li>
            <li className="step step-primary"><h2>Wait 30 minutes and you will recieve the parcel</h2></li>
            <li className="step step-primary"><h2>Enjoy door to door service and dont stay in hunger</h2></li>
            <li className="step step-primary"><h2>If you had exprerince and anything you want to add to it , just add review to the food and help others to select the food suitable for them.</h2></li>
        </ul>
        </div>
    );
};

export default Steps;