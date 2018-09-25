import React from 'react';

export default props => {
    console.log('Movies = ', props.info)

const {info} = props;

    return (
        <div>
            <img src={info['im:image'][2].label} />
            <h3>{info['im:name'].label}</h3>
        </div>
    );
}