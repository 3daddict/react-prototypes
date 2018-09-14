import React from 'react';
import Table from './table';

export default () => {

    const students = [
        {
            name: 'Jill',
            course: 'Math',
            grade: '50',
        },
        {
            name: 'Mat',
            course: 'English',
            grade: '98',
        },
        {
            name: 'Geraldo',
            course: 'Geography',
            grade: '89',
        },
    ];

    return (
    <div>
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students} />
        </div>
    </div>
)};