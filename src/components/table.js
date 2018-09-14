import React from 'react';

export default (props) => {

    const tableRows = props.data.map((item, index) => {
        console.log(item);
        return;
    });

    return (
    <table className="table">
        <thead className="thead-inverse">
            <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Grade</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Jill</td>
                <td>Math</td> 
                <td>50</td>
            </tr>
            <tr>
                <td>Mat</td>
                <td>English</td> 
                <td>98</td>
            </tr>
            <tr>
                <td>Geraldo</td>
                <td>Geography</td> 
                <td>80</td>
            </tr>
        </tbody>
    </table>
    )
}