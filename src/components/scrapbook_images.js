import React from 'react';

export default props => {
    console.log('props = ', props);
    const {src} = props.about;

    return <img src={src} alt=""/>
}