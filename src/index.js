import React from 'react';
import ReactDOM from 'react-dom';

const USER = {
    name: "Michael Salvati",
    luckyNumber: LuckyNumber(),
    }

  Greeting.propTypes = {
    name: React.PropTypes.string.isRequired,
    luckyNumber: React.PropTypes.number.isRequired,
  };

function LuckyNumber() {
    let luckyNumber = 0;
    luckyNumber = Math.floor((Math.random() * 1000) + 1);
    return luckyNumber;
}

function Greeting(props) {
    return (
        <div className="container">
            <h1>{props.name}</h1>
            <h2 className="text-muted">This is your lucky number: {props.luckyNumber}</h2>
        </div>
    );
}

//Alaways keep the ReactDOM.render at the bottom so it loads all the items...
ReactDOM.render(
    // <h1 className="container">React Prototypes!</h1>,
    Greeting(USER),
    document.getElementById('root')
);