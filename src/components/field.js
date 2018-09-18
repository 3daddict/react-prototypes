import React, { Component } from 'react';


export default props => {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input {...props}  className="form-control" autoComplete="off" />
        </div>
    )
}


/* <div className="form-group">
            <label>First Name</label>
            <input onChange={this.handleInputChange} value={firstName} name="firstName" type="text" className="form-control"/>
        </div>
        <div className="form-group">
            <label>Last Name</label>
            <input onChange={this.handleInputChange} value={lastName} name="lastName" type="text" className="form-control"/>
        </div> */